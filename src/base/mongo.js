/* global GMCP */
import * as Realm from "realm-web";

export const startUp = async () => {
  const app = new Realm.App({ id: "nexmap-izeal" });
  const apiKey =
    "pE7xABGhoWjv2XvSLvON4D2oOSF8WcmEwXkLoKzE2bqlIX1HpkxQIJTLUbr0qhPw";
  const credentials = Realm.Credentials.apiKey(apiKey);
  await app.logIn(credentials);
  const mongo = app.currentUser.mongoClient("mongodb-atlas");
  const db = mongo.db("nexAction").collection("skills");

  return db;
};
