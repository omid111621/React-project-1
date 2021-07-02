'use strict';

const path = require ('path');

module.exports={
    watch: true,
    mode: "production",
    devtool: "eval-cheap-module-source-map",
    entry: './src/ui/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'public')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },


       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },

      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },


        ]
    }

}
