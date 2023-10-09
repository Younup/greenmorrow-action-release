const versionConfig = {
  bumpFiles: [{ filename: "package.json", type: "json" }],
  commitAll: true,
  commitMessageFormat: "chore(release): {{currentTag}}",
  commitPaths: ["package.json", "package-lock.json"],
  commitUserEmail: "",
  commitUrlFormat: "https://github.com/{{owner}}/{{repository}}/commits{{hash}}",
  compareUrlFormat: "https://github.com/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
  types: [
    { type: "feat", section: "✨ feat" },
    { type: "design", section: "⚜️ design" },
    { type: "build", section: "👷 build" },
    { type: "bug", section: "🐛 bug fixes" },
    { type: "chore", hidden: false, section: "🚚 chore" },
    { type: "devop", hidden: false, section: "🆙 devop" },
    { type: "documentation", hidden: false, section: "📝 documentation" },
    { type: "style", hidden: false, section: "💄 styling" },
    { type: "refactor", hidden: false, section: "♻️ code refactoring" },
    { type: "performance", hidden: false, section: "⚡️ performance improvement", },
    { type: "ux", hidden: false, section: "🔥 ux change" },
    { type: "test", hidden: false, section: "✅ testing" },
  ],
};

module.exports = versionConfig;
