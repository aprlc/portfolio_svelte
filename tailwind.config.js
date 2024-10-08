/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'selector',

	theme: {
		fontFamily: {
			sans: ['"Fluxisch"', 'sans-serif']
		},

		extend: {
			colors: {
				black: '#272727',
				darkGray: '	#303030',
				cream: '#FEFFF6',
				gray: '#c4c4c4'
			},
			fontSize: {
				sm: '0.9rem',
				xs: '0.7rem'
			}
		}
	}
};

