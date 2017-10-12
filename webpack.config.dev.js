import path from 'path';
import webpack from 'webpack';
export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
     })
  ],
  module: {

    rules: [
      {
        test: /\.js$/,
        loaders: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                name: 'src/img/[hash]-[name].[ext]'
            }
        }]
}
    ]
  }
};

