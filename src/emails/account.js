const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = ((email, name) => {
    sgMail.send({
        to: email,
        from: 's.a.patel713@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
})

const sendCancelationEmail = ((email, name) => {
    sgMail.send({
        to: email,
        from: 's.a.patel713@gmail.com',
        subject: 'Cancelation membership from Task manager app!',
        text: `Good Bye  ${name}. I hope you enjoyed our application.`,
    })
})

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}