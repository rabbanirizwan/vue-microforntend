const { defineConfig } = require("@vue/cli-service");
const fedrationConfig = require("./fedrationConfig.json");

module.exports = defineConfig({
  publicPath: "http://localhost:8080",

  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config
      .plugin("module-fedration-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          ...fedrationConfig,

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
