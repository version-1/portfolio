import path from 'path'

export const onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        net: false,
        tls: false,
      },
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        config: path.resolve(__dirname, 'config'),
        constants: path.resolve(__dirname, 'src/constants'),
        context: path.resolve(__dirname, 'src/context'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        utils: path.resolve(__dirname, 'src/utils'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        services: path.resolve(__dirname, 'src/services'),
      },
    },
  })
}
