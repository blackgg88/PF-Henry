import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

const server = express();

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));

export default server;
