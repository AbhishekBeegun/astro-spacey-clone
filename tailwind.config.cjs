/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				elonnrml : ["Elon"],
				elonbold : ["elonbold"]
			},
			backgroundImage : {
				'dog' : "url('/ddin/doge.jpg')"
			}
		},
	},
	plugins: [],
}
