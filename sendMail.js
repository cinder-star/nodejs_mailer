const sendmail = require("sendmail")({silent: false});

const fs = require("fs");

async function sendMail(to, subject, body, attachmentContent) {
    sendmail({
        from: "hello@celo.tax",
        to: to,
        subject: subject,
        html: body,
        attachments: [{
            filename: "attachment.csv",
            content: attachmentContent,
            contentType: "text/csv"
        }]
    }, function (err, reply) {
        console.log(err && err.stack);
        console.log(reply);
    });
};

function prepareMailAndSend() {
    fs.readFile("./cities.csv", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
            }
        sendMail("sihantawsik@gmail.com", "Celo Tax Report", "test", data);
    });
};

module.exports = {
    prepareMailAndSend
};