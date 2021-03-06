const path = require('path')
const webpack = require('webpack')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        config: path.resolve(__dirname, 'config'),
        constants: path.resolve(__dirname, 'src/constants'),
        context: path.resolve(__dirname, 'src/context'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utils: path.resolve(__dirname, 'src/utils'),
        images: path.resolve(__dirname, 'src/images'),
        components: path.resolve(__dirname, 'src/components'),
        styles: path.resolve(__dirname, 'src/styles'),
        lib: path.resolve(__dirname, 'src/lib'),
        pages: path.resolve(__dirname, 'src/pages'),
        services: path.resolve(__dirname, 'src/services'),
      },
    },
  })
}
