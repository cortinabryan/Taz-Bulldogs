// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   host: "smtp-mail.outlook.com", // hostname
//   secureConnection: false, // TLS requires secureConnection to be false
//   port: 587, // port for secure SMTP
//   tls: {
//     ciphers: "SSLv3",
//   },
//   auth: {
//     user: "cortina_dev@outlook.com",
//     pass: "hakunamatata!@#",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const phone = req.body.phone;
//   const subject = req.body.subject;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "cortina_dev@outlook.com",
//     subject: "Contact Form Message",
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Subject: ${subject}</p> <p>Message: ${message}</p>`,
//   };

//   console.log("hello");
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       // res.json({ status: "ERROR" });
//       console.log(error);
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });
