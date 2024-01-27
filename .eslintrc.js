module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "eslint-config-next",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.js"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
		project: ["./tsconfig.json", "./cypress/tsconfig.json"],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    rules: {
        "react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
        "import/order": [
			"error",
			{
				"newlines-between": "always",
				groups: ["builtin", "external", ["parent", "internal", "sibling"], "index"],
				alphabetize: { order: "asc" },
			},
		],
        "no-console": ["error", { allow: ["error", "debug"] }],
        "@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "variable",
				format: ["camelCase", "UPPER_CASE", "PascalCase"],
				trailingUnderscore: "allowDouble",
				leadingUnderscore: "allowDouble",
			},
		],
        "indent": [
            "error",
            2,
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
