import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function fetchDatabaseContent(id: string) {
  const data = await notion.databases.query({ database_id: id });

  return data.results;
}

export async function fetchPageContent(id: string) {
  const data = await notion.blocks.children.list({
    block_id: id,
  });

  return data.results;
}
