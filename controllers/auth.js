const Message = require('../models/message')
const nodemailer = require('nodemailer')


const newMessage = async (req, res) => {
    const {name, email, message} = req.body
     
        var transporter = nodemailer.createTransport({
            service :'gmail',
            auth:{
                user: 'giodevswebservices@gmail.com',
                pass: 'tnbvoaygcfirzkzr'
            }
        })
        const mailOptions1 = {
            from: 'richardadaji@gmail.com',
            to: email,
            subject: 'New Message For Gio-Devs',
            html: `
            <body style="background-color:rgb(255, 235, 235); padding:10px; height:100%; width:100%">
    <div style="text-align:left; min-height:100; padding:20px">
        <h1 style="color:white; text-align: center; padding: 10px; text-shadow:0px 11px 5px rgb(148, 132, 88);background: linear-gradient(-145deg, rgb(30, 19, 77) 0%, rgb(211, 90, 35) 100%); border-radius: 10px;"> <strong>Gio-Devs</strong> </h1>
             
     <p>Sender's Name: ${name} </p>
     <p>Sender's Email: ${email} </p>
   
    <p style="text-align:left !important; color:black; background-color: inherit; font-weight:200">Message: <strong style="font-size:25px">${message}</strong> </p>
    </div>
    </body>

            
            `
        };
        const mailOptions2 = {
            from: 'richardadaji@gmail.com',
            to: email,
            subject: 'From Gio-Devs',
            html: `
            <body style="  display:flex; padding:10px; height:100%; width:100%; background-color: rgb(245, 243, 240);">
            <div style="text-align:left; min-height:100%; padding:20px">
              <h1 style="color:white; text-align: center; padding: 10px; text-shadow:0px 11px 5px rgb(148, 132, 88);background: linear-gradient(-145deg, rgb(30, 19, 77) 0%, rgb(211, 90, 35) 100%); border-radius: 10px;"> <strong>Gio-Devs</strong> </h1>
             <h2 style="color: rgb(11, 6, 61);">Hi <strong style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${name}</strong></h2>
            <p style="padding:10px; font-family: cursive; font-size:25px; text-alig:left !important; color:rgb(107, 64, 38); background-color: inherit; font-weight:400">We got your message, we will respond accordingly. <br/> <br/>Thank you!</p>
            <div style="color:white; text-align: center; padding: 10px;background: inherit; border-radius: 10px; display: flex; justify-content: space-evenly;">
                <a href="http://gio-devs.onrender.com" style="text-decoration: none; color: white;box-shadow: inset 1px 2px 15px black; margin-right:20px; border-radius: 10px; padding: 5px; background-color: rgb(219, 108, 17);">Goto site</a>
                <a href="tel:07065469493" style="text-decoration: none; color: white; border-radius: 10px;box-shadow: inset 1px 2px 15px black; margin-left:20px; padding: 5px; background-color: rgb(192, 99, 11);">Customer Care</a>
            </div>
        </div>
        
            </body>
            
            `
        };
        transporter.sendMail(mailOptions1, function(error, body){
            if(error){
                return res.json({error: error})
            }
            res.json({message: message })
        })
        transporter.sendMail(mailOptions2, function(error, body){
            if(error){
                return res.json({error: error})
            }
            res.json({message: "Thank you" })
        })
    
}
module.exports = {newMessage}