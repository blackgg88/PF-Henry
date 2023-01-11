import { connect, set } from "mongoose";
import server from "./src/app";

set("strictQuery", true);

import { DB_USER, DB_PASSWORD, DB_NAME, DB, PORT } from "./config";

async function connectDB() {
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`);
  server.listen(PORT, () => {
    console.log(`listening at ${PORT}`);
  });
}

connectDB();

async function executeQueries() {
  ///////////////////////////////////
  // const user = new User({
  //   firstname: "kevincito",
  //   lastname: "dieguito",
  //   email: "kevincitoKernel@gmail.com",
  //   password: "12345678",
  //   age: 25,
  //   roles: ["63bce656cb20bef5f45d2a1d", "63bce656cb20bef5f45d2a1e"],
  // });
  // await user.save();
  // console.log(user);
  ///////////////////////////////////
  // const product = await Product.create({
  //   name: "Air Jordan XII",
  //   price: 392,
  //   size: "42",
  //   gender: "male",
  //   brand: "JORDAN",
  // });
  // console.log(product);
  ////////////////////////////////////////////
  // const result = await Role.insertMany([
  //   { name: "admin" },
  //   { name: "user" },
  //   { name: "guest" },
  // ]);
  // console.log(result);
  ////////////////////////////////////////
  // const user = await User.findById("63bce863f84b2ce600b4487b").populate(
  //   "roles",
  //   "name -_id"
  // );
  // console.log(user);
}

executeQueries();
