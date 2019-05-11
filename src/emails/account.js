const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'appu@yahoo.com',
    subject: 'Welcome to the App!!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'appu@yahoo.com',
    subject: 'Cancel your service!!',
    text: `Goodbye ${name}, I hope to see you back soon.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
