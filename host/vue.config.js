const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081",
  devServer: {
    historyApiFallback: true,
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config
      .plugin("module-fedration-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          remotes: {
            body: "body@http://localhost:8080/remoteEntry.js",
            header: "header@http://localhost:8082/remoteEntry.js",
          },

          shared: {
            vue: {
              eager: true,
              singleton: false,
            },
          },
          filename: "remoteEntry.js",
        },
      ]);
  },
 
});
