
module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	plugins: [
		'eslint-plugin-jsdoc'
	],
	parserOptions: { ecmaVersion: 2020 },
	rules: {
		'jsdoc/require-param': 1, // Recommended
	}
};
