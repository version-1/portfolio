const path = require("path")
const webpack = require("webpack")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        config: path.resolve(__dirname, "config"),
        constatns: path.resolve(__dirname, "config"),
        images: path.resolve(__dirname, "src/images"),
        components: path.resolve(__dirname, "src/components"),
        lib: path.resolve(__dirname, "src/lib"),
        pages: path.resolve(__dirname, "src/pages"),
      },
    },
  })
}
