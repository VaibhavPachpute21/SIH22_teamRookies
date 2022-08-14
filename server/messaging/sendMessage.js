require('dotenv').config({ path: "../config.env" })

var accountSid = process.env.ACCOUT_SID;
var authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

exports.FirstSendMessage = async (grievant_name, reciever_name) => {
    client.messages.create({
        from: "+1 314 912 3216",
        to: "+918799817029",
        body: `Hey ${grievant_name}! Your grievance has been submitted successfully, and is now forwarded to ${reciever_name}`
    }).then(data => console.log(data))
        .catch(err => console.log(err))

}

exports.SendMessage = async (grievant_name, grievance_title, reciever_name) => {

    client.messages.create({
        from: "+1 314 912 3216",
        to: "+918799817029",
        body: `Hey ${grievant_name}! your grievance regarding ${grievance_title} has now been forwarded to ${reciever_name}`
    }).then(data => console.log(data))
        .catch(err => console.log(err))
}



