// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNo = process.env.TWILIO_FROM;
const toNo = process.env.TWILIO_TO;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Yeooooooooo!!!!! You code brah?',
     from: fromNo,
     to: toNo
   })
  .then(message => console.log(message.sid));
