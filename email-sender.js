import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lilchizzyblingz27@gmail.com",
    pass: "jvegatbyzxmatojj",
  },
});

const mailOptions = {
  from: "lilchizzyblingz27@gmail.com",
  to: "manueleze36@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Please reply if you got this test mail!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
