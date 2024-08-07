import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from "astro/config";
import { seoConfig } from "./src/utils/seoConfig";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
	site: seoConfig.baseURL
})
