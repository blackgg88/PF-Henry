import express from "express";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(express.json());

server.use(morgan("dev"));

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Falta routes
//server.use("/", routes)

export default server;
