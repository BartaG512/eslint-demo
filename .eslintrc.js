
module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
		jest: true,
	},
	parserOptions: { ecmaVersion: 2020 },
	rules: {
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'class',
			},
			{
				blankLine: 'always',
				prev: 'cjs-export',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'cjs-export',
			},
			{
				blankLine: 'always',
				prev: 'cjs-export',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: 'class',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'function',
			},
			{
				blankLine: 'always',
				prev: 'function',
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: 'if',
			},
		],
		semi: [
			'error',
			'always',
		],

	},
};
