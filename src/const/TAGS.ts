/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import FirebaseIcon from "@/icons/Firebase.astro"
import AstroIcon from "../icons/AstroIcon.astro"
import CSSIcon from "../icons/CSS.astro"
import GSAPIcon from "../icons/GSAP.astro"
import HTMLIcon from "../icons/HTML.astro"
import InProgressIcon from "../icons/InProgress.astro"
import JSIcon from "../icons/JS.astro"
import NextJSIcon from "../icons/NextJS.astro"
import ReactIcon from "../icons/React.astro"
import TailwindIcon from "../icons/Tailwind.astro"
import ViteIcon from "../icons/Vite.astro"
import ZustandIcon from "../icons/Zustand.astro"




export const TAGS = {
	HTML: {
		name: "HTML",
		class: "bg-[#9E3414] text-white",
		icon: HTMLIcon,
	},
	CSS: {
		name: "CSS",
		class: "bg-[#0C598D] text-white",
		icon: CSSIcon,
	},
	JS: {
		name: "JAVASCRIPT",
		class: "bg-[#877408] text-white",
		icon: JSIcon,
	},
	GSAP: {
		name: "GSAP",
		class: "bg-[#3E6020] text-white",
		icon: GSAPIcon,
	},
	NEXT: {
		name: "Next.js",
		class: "bg-black text-white",
		icon: NextJSIcon,
	},
	TAILWIND: {
		name: "Tailwind CSS",
		class: "bg-[#0C598D] text-white",
		icon: TailwindIcon,
	},
	ASTRO: {
		name: "Astro",
		class: "bg-[#993500] text-white",
		icon: AstroIcon,
	},
	REACT: {
		name: "React",
		class: "bg-[#00589E] text-white",
		icon: ReactIcon,
	},
	VITE: {
		name: "Vite",
		class: "bg-[#5D4D8E] text-white",
		icon: ViteIcon,
	},
	ZUSTAND: {
		name: "Zustand",
		class: "bg-[#003159] text-white",
		icon: ZustandIcon,
	},
	FIREBASE: {
		name: "Firebase",
		class: "bg-[#665600] text-white",
		icon: FirebaseIcon,
	},
	INPROGRESS: {
		name: "In Progress",
		class: "bg-[#993500] text-white",
		icon: InProgressIcon,
	},
}