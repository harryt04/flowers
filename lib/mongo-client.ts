import { MongoClient, type Db } from "mongodb";

export const mongoDBConfig = {
  dbName: `sunshineflowerbar-${process.env.NODE_ENV}`,
  collections: {
    bookingRequests: "bookingRequests",
    emailSubscribers: "emailSubscribers",
  },
};

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (global._mongoClientPromise) {
    return global._mongoClientPromise;
  }

  const clientPromise = new MongoClient(uri, {
    maxPoolSize: 10,
  }).connect();

  if (process.env.NODE_ENV !== "production") {
    global._mongoClientPromise = clientPromise;
  }

  return clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(mongoDBConfig.dbName);
}
