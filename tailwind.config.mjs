import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"primary": "var(--color-primary)",
				"secondary": "var(--color-secondary)",
				"accent": "var(--color-accent)",
				"neutral": "var(--color-neutral)",
				"neutral-focus": "var(--color-neutral-focus)",
				"neutral-content": "var(--color-neutral-content)",
				"base-100": "var(--color-base-100)",
				"base-200": "var(--color-base-200)",
				"base-300": "var(--color-base-300)",
				"base-content": "var(--color-base-content)",
				"info": "var(--color-info)",
				"success": "var(--color-success)",
				"warning": "var(--color-warning)",
				"error": "var(--color-error)",
			},
			screens: {
				"xs": "360px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
		},
	},
	plugins: [
		animations,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}
