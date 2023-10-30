module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-empty": [1, "never"],
		"references-empty": [1, "never"],
		"scope-empty": [1, "never"],
		"type-enum": [
			2,
			"always",
			[
				"build",
				"chore",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
			],
		],
	},
};
