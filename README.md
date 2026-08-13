# Madhumita Moi — Portfolio V2

A static, editorial personal site built with Astro. Content lives separately from presentation and can be edited as Markdown or JSON.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Edit content

- Add a project: create a Markdown file in `src/content/projects/` using an existing project as a template.
- Publish a note: create a Markdown file in `src/content/notes/`, set `draft: false`, and commit it.
- Update work: edit the relevant JSON file in `src/content/experience/`.
- Update About: edit `src/content/about/main.json`.

The optional Decap CMS editor is available at `/admin/`. Before deploying it, configure GitHub OAuth for the production domain. The CMS uses an editorial workflow and stores all changes in Git.

## Routes

- `/` — Home
- `/work/` — Experience
- `/projects/` and `/projects/[slug]/` — Project index and case studies
- `/notes/` and `/notes/[slug]/` — Notes index and articles
- `/#about` — About content on the homepage
- `/rss.xml` — Notes feed
