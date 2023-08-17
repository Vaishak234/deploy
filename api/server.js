const express = require('express');
const path = require('path');
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')



const app = express();
const port =  4000

app.use(session({
   secret: 'secret for session',
   resave: true,
   saveUninitialized:true,
   cookie: {
       maxAge: 24 * 60 * 60 * 1000 * 7,
       secure: true,
       sameSite:"none"
   }
}))



app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin:"https://deploy123.onrender.com",credentials:true}))
app.use(cookieParser())


app.get('/start', (req, res) => {
    res.cookie('set', "cookie")
    res.json('setted cookie')
})

app.listen(port, () => {
   console.log('server is running on port ',port);
})

