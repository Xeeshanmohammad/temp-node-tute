const nodemailer = require('nodemailer')

const sendMail = async(req,res)=>{
    
let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'verla.crooks54@ethereal.email',
            pass: '8mmJ35ZCfXyWnVvX4y'
        }
    });

    let info = await transporter.sendMail({
        form:'"code zeeshan" <codewithzeeshan@gmail.com>',
        to:'buyju`s@example.com',
        subject:'How are you',
        html:'<h2>Sending Email with node js</h2>'
    })
    res.status(200).json({info})
}

module.exports = sendMail