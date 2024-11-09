import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

export async function fetchPageContent(
  id: string,
): Promise<PageObjectResponse> {
  const data = await notion.pages.retrieve({ page_id: id });

  if (!isPageObjectResponse(data)) {
    throw new Error('Data is not a valid PageObjectResponse');
  }
  return data;
}

export async function fetchBlockContent(id: string) {
  const data = await notion.blocks.children.list({
    block_id: id,
  });

  return data.results;
}
