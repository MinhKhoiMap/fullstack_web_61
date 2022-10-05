import express from "express";
import cors from "cors";
import database from "./DAL/database";
import tutorialsRoute from "./routes/tutorials.js";

const app = express();
const db = new database();

app.use(express.json());
app.use(cors());

app.use("/api/tutorials", tutorialsRoute);

app.listen(3002, () => {
  console.log("App is listening...");
  db.connect()
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      throw err;
    });
});
