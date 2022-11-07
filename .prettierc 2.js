module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 120,
  arrowParens: "avoid",
  bracketSpacing: true,
  proseWrap: "preserve",
  requirePragma: false,
  overrides: [
    {
      files: "*.vue",
      options: { parser: "vue" },
    },
  ],
};
