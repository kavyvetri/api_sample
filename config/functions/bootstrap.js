"use strict";
const admin = require("firebase-admin");
//const serviceAccount = require("../../serverconfig.json");
module.exports = () => {
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  //   databaseURL: "",
  // });
  strapi.firebase = admin;
};
