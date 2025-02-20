// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [react({ experimentalDisableStreaming: true })],
  output: "server",
  base: '.',

  adapter: node({
    mode: "standalone"
  }),
  image: {
    domains: [""]
  }
});