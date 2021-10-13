# Twilio Basic Application

This application has been used to 

1. Write a script to send a SMS message from a twilio number to a verified phone number
2. Reply to that number when it sends an SMS message to the twilio number.

### Sending a SMS message
The repository contains the script for sending a SMS message.

### Response to SMS with a Twilio Webhook
The repository also contains an express server script (or Webhook) from which Twilio makes an HTTP request to. Within this script is the logic to send the SMS response, however more functionality can be added into this script.

If planning to run the server side script locally, the Ngrok must be used to establish an encrypted connection from the localhost to Twilio. The following command will help you do that
`twilio phone-numbers:update "+1<your-phone-number" --sms-url="http://localhost:1337/sms" `
