const nodemailer = require("nodemailer");

/* nodemailer.createTestAccount((err, account) => {
    if(err){
        console.log("error trying to create test account " + err.message);
        return process.exit(1);
    }
    console.log("credentials obtained, sending message....")
})  */

module.exports = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // transporter.set("oauth2_provision_cb", (user, renew, callback) => {
    //     let accessToken = userTokens[user];
    //     if(!accessToken){
    //         return callback(new Error("unknown user"));
    //     } else {
    //         return callback(null, accessToken);
    //     }
    // })

    transporter.verify(function(error, success){
        if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");
        }
    })
    
    const message = await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text
    });
    console.log("email has been sent successfully", message);

    return message?.id ?? "no message id";

  } catch (error) {
    console.log("email not sent " + error);
    return error;
  }
};
