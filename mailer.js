'use strict'
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'comital333@gmail.com',
    pass: ''
  }
})


const sendmail = (info, callback) => {

  const userInfo = `<h2>${info.firstName} ${info.lastName}<h2>
                    <h3>phoneNumber: ${info.phoneNumber}</h3>
                    <h3>email: ${info.email}</h3>
                    <h3>state: ${info.state} suburb: ${info.suburb}</h3>`

  let mailOptions = {
    from: info.email,
    to: 'seankelly7@me.com',
    subject: "Enquiry",
    text: "",
    html: userInfo
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error)
      callback(error)
    }
    callback('message sent', info.messageId, info.response)
  })

}

module.exports.sendmail = sendmail
