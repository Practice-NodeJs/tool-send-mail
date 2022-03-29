const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tintt_tts@rikkeisoft.com",
      pass: "********",
    },
  });

  let info = await transporter.sendMail({
    from: "Tintt 👻",
    to: "truongthanhtin6@gmail.com",
    subject: "Hello ✔",
    text: "Hello world !",
    html: "<h1>Hi, mọi người !!</h1>",
  });
}

module.exports = main;
