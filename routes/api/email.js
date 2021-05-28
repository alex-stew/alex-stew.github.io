const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.post("/", async (req, res) => {
  try {
    if (
      req.body.email.length < 200 &&
      req.body.name.length < 200 &&
      req.body.message.length < 200
    ) 
    {
      const myOAuth2Client = new OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET);

      myOAuth2Client.setCredentials({
        refresh_token: process.env.OAUTH_REFRESH_TOKEN,
      });

      console.log(process.env.OAUTH_REFRESH_TOKEN);

      const myAccessToken = await myOAuth2Client.getAccessToken();

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: myAccessToken
        },
        tls: {
          rejectUnauthorized: false
        }
      });

        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message; 
        const mail = {
          from: name,
          to: "alexanderstewart92@gmail.com",
          subject: "Portfolio Contact Form",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Message: ${message}</p>`,
        };
      transporter.sendMail(mail);

      res.status(200).send("worked");
    } else {
      res.status(400);
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;