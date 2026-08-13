import { getCollection } from 'astro:content';
export async function GET({ site }) {
  const notes = (await getCollection('notes')).filter(n => !n.data.draft).sort((a,b) => b.data.date - a.data.date);
  const items = notes.map(n => `<item><title><![CDATA[${n.data.title}]]></title><link>${new URL(`/notes/${n.id}/`, site)}</link><guid>${new URL(`/notes/${n.id}/`, site)}</guid><pubDate>${n.data.date.toUTCString()}</pubDate><description><![CDATA[${n.data.description}]]></description></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Madhumita Moi — Notes</title><link>${site}</link><description>Notes on engineering, AI and product.</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/xml' } });
}
