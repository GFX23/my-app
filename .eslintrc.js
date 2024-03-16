module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"eslint-config-next",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"prettier",
		"airbnb-typescript",
		"airbnb/hooks",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.js"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: ["./tsconfig.json"],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react", "prettier"],
	rules: {
		"@typescript-eslint/indent": "off",
		"react/react-in-jsx-scope": "off",
		"import/prefer-default-export": ["off", { target: "any" }],
		"import/no-default-export": 2,
		"import/no-extraneous-dependencies": "off",
		"react/jsx-props-no-spreading": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"import/no-cycle": "off",
		"import/order": [
			"error",
			{
				"newlines-between": "always",
				groups: ["builtin", "external", ["parent", "internal", "sibling"], "index"],
				alphabetize: { order: "asc" },
			},
		],
		"no-console": ["warn", { allow: ["error"] }],
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"@typescript-eslint/no-unused-expressions": "off",
		"react/prop-types": "off",
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE", "PascalCase"],
				trailingUnderscore: "allowDouble",
				leadingUnderscore: "allowDouble",
			},
		],
		"@typescript-eslint/quotes": ["error", "double"],
		semi: ["error", "always"],
	},
	ignorePatterns: [".eslintrc.js", "node_modules/", "dist/", "build/", ".next/"],
	overrides: [
		{
			// COMMENT - nextjs app dir special components must have default export
			files: [
				"page.tsx",
				"layout.tsx",
				"loading.tsx",
				"error.tsx",
				"logger.ts",
				"next.config.js",
				"tailwind.config.ts",
				"prettier.config.js",
				"global.d.ts",
				"not-found.tsx",
				"template.tsx",
			],
			rules: {
				"import/no-default-export": "off",
				"import/prefer-default-export": ["error", { target: "any" }],
			},
		},
	],
};
