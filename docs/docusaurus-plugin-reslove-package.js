const path = require("path")

module.exports = function docusaurusPluginReslovePackage(context, options) {
  return {
    name: "docusaurus-plugin-reslove-package",
    configureWebpack(_config, _isServer, _utils) {
      return {
        resolve: {
          alias: {
            react: path.resolve(__dirname, "../node_modules/react"),
            "kakao.maps.d.ts": path.resolve("../node_modules/kakao.maps.d.ts"),
            "react-kakao-maps-sdk": path.resolve(__dirname, "../src"),
          },
        },
      }
    },
  }
}
