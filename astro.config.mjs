// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeFigureTitle from "rehype-figure-title";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://hanzfelix.is-a.dev/",
  base: "/on-paper",
  integrations: [mdx(), sitemap(), mermaid({ theme: "neutral" })],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeFigureTitle],
  },
});
