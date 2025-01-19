import { memoize, TEN_MINUTES } from '@/lib/memoize';
import { Client } from '@notionhq/client';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function isPageObjectResponse(response: any): response is PageObjectResponse {
  return !!response.properties;
}

export async function fetchDatabaseContent(id: string) {
  const data = await notion.databases.query({ database_id: id });

  return data.results.filter(isPageObjectResponse);
}

export const retrieveDatabase = memoize(
  { ttl: TEN_MINUTES, key: 'retrieveDatabase' },
  async (id: string) => {
    const data = await notion.databases.query({ database_id: id });

    return data.results.filter(isPageObjectResponse);
  },
);

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
