import "dotenv/config";
import fastifySession from "@fastify/session";
import connectMongodbSession from "connect-mongodb-session";
import { Admin } from "../models";

const MongoDBStore = connectMongodbSession(fastifySession);

export const sessionStore = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});

sessionStore.on("error", function (error) {
  console.log("Session store error", error);
});

export const authenticate = async (email, password) => {
  if (email == "deepak@gmail.com" && password == "123456") {
    return Promise.resolve({
      email: email,
      password: password,
    });
  } else {
    return null;
  }
};
