/* global GMCP */
import * as Realm from "realm-web";
import { achaea } from "../config";

export const startUp = async () => {
  const app = new Realm.App({ id: "nexmap-izeal" });
  const apiKey = achaea;
  const credentials = Realm.Credentials.apiKey(apiKey);
  await app.logIn(credentials);
  const mongo = app.currentUser.mongoClient("mongodb-atlas");
  const db = mongo.db("nexAction").collection("skills");

  return db;
};
