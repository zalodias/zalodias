import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getBookmarks() {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  return data.results;
}
