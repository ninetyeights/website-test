import mongoose from "mongoose";

const { MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB } = process.env;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}.n2h44.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
    );
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
