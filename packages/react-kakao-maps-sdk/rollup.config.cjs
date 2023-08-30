// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateRollupConfig } = require("@configs/rollup")

module.exports = (commandLineArgs) =>
  generateRollupConfig({
    packageDir: __dirname,
    analyze: commandLineArgs.configAnalyze,
  })
