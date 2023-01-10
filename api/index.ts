import { connect, set } from "mongoose";
import server from "./src/app";

set("strictQuery", true);

import { DB_USER, DB_PASSWORD, DB_NAME, DB, PORT } from "./config";

async function connectDB() {
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`);
  console.log("database is connect");
}

connectDB();

server.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
