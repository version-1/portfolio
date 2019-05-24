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
        constants: path.resolve(__dirname, "src/constants"),
        context: path.resolve(__dirname, "src/context"),
        images: path.resolve(__dirname, "src/images"),
        components: path.resolve(__dirname, "src/components"),
        lib: path.resolve(__dirname, "src/lib"),
        pages: path.resolve(__dirname, "src/pages"),
      },
    },
  })
}
