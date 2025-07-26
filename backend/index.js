const express = require('express')
const app = express()
require('dotenv').config();
require('./models/db');


const cors = require('cors')

const PORT = process.env.PORT || 4000;
const bodyparser = require('body-parser')

const AuthRouter = require('./Routes/AuthRouter') 
const action=require('./Routes/Actions');


app.use(bodyparser.json());
app.use(cors());


app.use('/ping', (req, res) => {
    res.send("working")
})
app.use(cors({
  origin: "*"
}));


app.use('/auth', AuthRouter); 
app.use('/action',action);


app.listen(PORT, () => {
    console.log(" listning at  ", PORT)
})