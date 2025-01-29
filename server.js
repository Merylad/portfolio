const express = require("express");
const cors = require("cors");
const nodemailer = require ('nodemailer')
const path = require("path");
const dotenv = require ('dotenv')
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening on ${process.env.PORT || 3001}`);
  });



const contact = async (req, res) => {
    const { name, email, message } = req.body;
  
    // Validate request data
    if (!name || !email || !message) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }
  
    try {
      // Configure Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use Gmail or another email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Email password or app-specific password
        },
        tls: {
            rejectUnauthorized: false, // Ignore certificate errors
          },
      });
  
      // Email Content
      const mailOptions = {
        from: email, // Sender's email
        to: process.env.EMAIL_USER, // Your email to receive messages
        subject: `New Message from ${name}`,
        text: `${message} from email : ${email}`,
      };
  
      // Send Email
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
}

app.post('/api/contact', contact)


// Have Node serve the files for our built React app

app.use(express.static(path.join(__dirname, "/client/dist")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client1/dist", "index.html"));
});

