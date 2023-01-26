import nodemailer = require("nodemailer");
import { ADMIN_EMAIL, GMAIL_API } from "../../config";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: `${ADMIN_EMAIL}`, // generated ethereal user
    pass: `${GMAIL_API}`, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("listo para mandar emails");
});
