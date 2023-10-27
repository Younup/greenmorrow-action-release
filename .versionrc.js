const versionConfig = {
	bumpFiles: [{ filename: "package.json", type: "json" }],
	commitMessageFormat: "chore(release): {{currentTag}}",
	commitPaths: ["package.json", "package-lock.json"],
	commitUserEmail: "https://github.com/{{user}}",
	commitUrlFormat:
		"https://github.com/{{owner}}/{{repository}}/commits/{{hash}}",
	compareUrlFormat:
		"https://github.com/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
	types: [
		{ type: "build", section: "🛠 Builds" },
		{ type: "chore", section: "🚚 chore" },
		{ type: "ci", section: "⚙️ Continuous Integrations" },
		{ type: "docs", section: "📚 Documentation" },
		{ type: "feat", section: "✨ Features" },
		{ type: "fix", section: "🐛 Bug Fixes" },
		{ type: "perf", section: "🚀 performance improvement" },
		{ type: "refactor", section: "♻️ Code Refactoring" },
		{ type: "revert", section: "🗑 Reverts" },
		{ type: "style", section: "💎 Styles" },
		{ type: "test", section: "🚨 Tests" },
	],
};

module.exports = versionConfig;
