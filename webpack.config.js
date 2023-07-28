const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: "production",
    // devServer: {
    //     port: 3000
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),

        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@https://shoppy-products.netlify.app/remoteEntry.js',
                cart: 'cart@https://shoppy-kart.netlify.app/remoteEntry.js'
            }
        })
    ]
}