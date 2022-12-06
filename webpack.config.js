const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // エントリーポイント(メインのjsファイル)
  entry: './src/js/app.js',
  // ファイルの出力設定
  output: {
    // 出力先(絶対パスでの指定必須)
    path: path.resolve(__dirname, 'dist/js'),
    // 出力ファイル名
    filename: "bundle.js"
  },
  mode: 'development',
  // ソースマップ有効
  devtool: 'source-map',
	module: {
    rules: [
      {
        // ローダーの対象 // 拡張子 .js の場合
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!.keep'
      ],
    })
  ]
}
