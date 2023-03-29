const path = require(`node:path`)

module.exports = {
  entry: './source/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        type: `javascript/auto`,
        test: /\.txt$/,
        use: [{
          loader: path.resolve(__dirname, `webpack`, `txt-loader.js`)
        }]
      }
    ]
  }
}