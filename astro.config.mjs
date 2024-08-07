import tailwind from "@astrojs/tailwind"
import vercelStatic from "@astrojs/vercel/static"
import { defineConfig } from "astro/config"

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
	output: "server",
	adapter: vercelStatic(),
})
