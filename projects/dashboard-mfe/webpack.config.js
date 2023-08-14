const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  ...withModuleFederationPlugin({
    name: "dashboard-mfe",
    exposes: {
      "./DashboardModule":
        "./projects/dashboard-mfe/src/app/dashboard/dashboard.module.ts",
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }),
};
