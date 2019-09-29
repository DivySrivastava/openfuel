var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "openfuel",
  title: "openfuel",
  commands: {
    package:
      "electron-packager electron.js openfuel --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 8000
  },
  author: "Divy Srivastava",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/openfuel",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
