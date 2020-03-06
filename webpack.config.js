var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Rating.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Rating.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
      react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
      },
      'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
      }
    },
}