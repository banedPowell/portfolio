export default defineAppConfig({
	ui: {
		colors: {
			primary: 'red',
			neutral: 'dark',
		},

		prose: {
			h1: {
				slots: {
					base: 'font-display text-4xl font-medium text-gray-100',
				},
			},
			h2: {
				slots: {
					base: 'text-2xl text-gray-300 font-display font-normal',
				},
			},
			p: {
				base: 'my-0 w-full text-gray-500 group-hover:text-gray-300 transition-colors',
			},
			a: {
				base: 'text-gray-500 hover:text-gray-300 border-b-0 font-light group-hover:text-gray-300 transition-colors',
			},
		},
	},
});
