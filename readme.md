## Twilio SMS APP Challenge (Intro Project)

Today we will use Twilio SMS to confirm our User registration.
We will have a simple registation form. If the registration went 
successful, you should send a text message with the fields you filled
out in the HTML Form. This is a Node.Js project, to install Node: https://nodejs.org/en/

## Project Instructions Challenge Part 1 :
- Create A Twilio Account
    -  Sign up at :https://www.twilio.com/try-twilio , 
       you will be given $15.50 worth of free credit. 
- Clone this repo
- You will modify the HTML Form in the project to have an action of Post and create a route to
send you a twilio sms. Docs can be found here: https://www.twilio.com/docs/sms/quickstart/node
- To run the Project Application:
    - npm install
    - npm start
** You are also free to use a different language, if you do not want to use Node/Express, please modify the index.html form action appropiately**
Bonus Challenge:
Add a text field to the Form, then follow the quickstart instructions to send a text from yourself to the form. 
https://www.twilio.com/docs/sms/quickstart/node#receive-and-reply-to-inbound-sms-messages-with-express
https://www.twilio.com/docs/sms/quickstart/node#install-the-twilio-cli

## Project Instructions Challenge Part 2 :
Part 1 should already be done for you. 
For this part of the challenge, you will be sending texts from your phone to Twilio. Once you verify that in the logs,  you are going to create another Post route that sends the body
of the data of your request. You can use Curl or Postman to verify your request and response. 
Instructions from Twilio:
-https://www.twilio.com/docs/sms/quickstart/node#receive-and-reply-to-inbound-sms-messages-with-express
- https://www.twilio.com/docs/sms/quickstart/node#install-the-twilio-cli
- You can verify in the logs, by going to your twilio console on the web browser, and clicking logs 
to verify your text messages has been sent. 

- For the API request, you can verify with curl as such:
curl -d '{"username"":"someusername", "msg":"some_message"}' -X POST https://localhost:8080/sms


