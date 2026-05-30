import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  const clientPromise =
    global._mongoClientPromise ??
    new MongoClient(uri, {
      maxPoolSize: 10,
    }).connect();

  if (process.env.NODE_ENV !== "production") {
    global._mongoClientPromise = clientPromise;
  }

  const client = await clientPromise;
  return client.db();
}
