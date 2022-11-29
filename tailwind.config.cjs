/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'darker': 'var(--darker)',
				'dark': 'var(--dark)',
				'grayer': 'var(--grayer)',
				'gray': 'var(--gray)',
				'light': 'var(--light)',
				'lighter': 'var(--lighter)',
			},
			fontSize: {
				'fluid-0': 'var(--fluid-0)',
				'fluid-1': 'var(--fluid-1)',
				'fluid-2': 'var(--fluid-2)',
				'fluid-3': 'var(--fluid-3)',
				'fluid-4': 'var(--fluid-4)',
				'fluid-5': 'var(--fluid-5)',
				'fluid-6': 'var(--fluid-6)',
				'fluid-7': 'var(--fluid-7)',
				'fluid-8': 'var(--fluid-8)',
				'fluid-9': 'var(--fluid-9)',
			},
			screens: {
				'xs': '480px'
			}
		},
	},
	plugins: [],
}
