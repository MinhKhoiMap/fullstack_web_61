import mongoose from "mongoose";

const databaseUrl = "mongodb://localhost:27017/mindx_web_61";

class database {
  constructor() {}
  connect = async () => {
    await mongoose.connect(databaseUrl);
  };
}

export default database;