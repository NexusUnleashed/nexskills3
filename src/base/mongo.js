/* global GMCP */
import * as Realm from "realm-web";

export const startUp = async () => {
  const app = new Realm.App({ id: "nexmap-izeal" });
  const apiKey =
    "iYUg10Ymuo2sIF1JPIvUrfCbxvQ7SQ78WFxRvY8wc1wSfe9xHwwdNqlo7NgGw89g";
  const credentials = Realm.Credentials.apiKey(apiKey);
  await app.logIn(credentials);
  const mongo = app.currentUser.mongoClient("mongodb-atlas");
  const db = mongo.db("nexAction").collection("skills");

  return db;
};
