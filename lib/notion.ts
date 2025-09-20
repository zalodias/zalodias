import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  timeoutMs: 30000,
});

interface SortConfig {
  property: string;
  direction: 'ascending' | 'descending';
}

interface FilterConfig {
  property: string;
  status: {
    equals: string;
  };
}

function isPageObjectResponse(response: any): response is PageObjectResponse {
  return !!response.properties;
}

export async function fetchDatabaseContent(
  databaseId: string,
  options?: {
    sorts?: SortConfig[];
    filter?: FilterConfig;
    page_size?: number;
  },
  fetchOptions?: RequestInit,
) {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        sorts: options?.sorts?.map((sort) => ({
          property: sort.property,
          direction: sort.direction,
        })),
        filter: options?.filter && {
          property: options.filter.property,
          status: options.filter.status,
        },
        page_size: options?.page_size ?? 100,
      }),
      ...fetchOptions,
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch data from Notion: ${response.statusText}`);
  }

  const data = await response.json();

  return data.results.filter(isPageObjectResponse) as PageObjectResponse[];
}

export async function fetchPageContent(
  id: string,
): Promise<PageObjectResponse> {
  const data = await notion.pages.retrieve({ page_id: id });

  if (!isPageObjectResponse(data)) {
    throw new Error('Data is not a valid PageObjectResponse');
  }
  return data;
}

type BlockWithChildren = BlockObjectResponse & {
  children?: BlockWithChildren[];
};

export async function fetchBlockContent(
  id: string,
): Promise<BlockWithChildren[]> {
  const { results } = await notion.blocks.children.list({
    block_id: id,
  });

  const blocks = await Promise.all(
    results.map(async (block): Promise<BlockWithChildren> => {
      if ('has_children' in block && block.has_children) {
        const children = await fetchBlockContent(block.id);
        return { ...(block as BlockObjectResponse), children };
      }
      return block as BlockObjectResponse;
    }),
  );

  return blocks;
}
