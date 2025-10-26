export default defineAppConfig({
	ui: {
		colors: {
			primary: 'gray',
			neutral: 'dark',
		},

		stepper: {
			slots: {
				wrapper: 'text-gray-300',
				title: 'text-gray-300',
				description: 'text-gray-400',
			},
		},

		modal: {
			slots: {
				wrapper: 'text-gray-300',
				title: 'text-gray-300',
				description: 'text-gray-400',
			},
		},

		button: {
			slots: {
				base: 'w-fit',
			},
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
			h4: {
				slots: {
					base: 'text-lg text-gray-300 font-display font-normal mt-0 mb-1',
				},
			},
			p: {
				base: 'my-0 w-full text-gray-400 group-hover/islink:text-gray-300 transition-colors',
			},
			a: {
				base: 'text-gray-400 hover:text-gray-300 border-b-0 font-light group-hover/islink:text-gray-300 transition-colors',
			},
		},
	},
});
