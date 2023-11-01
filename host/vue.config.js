const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: "http://localhost:8081",
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config
      .plugin("module-fedration-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          remotes: {
            body: "body@http://localhost:8080/remoteEntry.js",
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
  transpileDependencies: true,
});
