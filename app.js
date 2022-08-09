const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT||9090;
const authR = require('./Routes/auth.route');
const DataRouter = require('./Routes/GetData')
const Checking = require('./Routes/Checking')
app.get('/',function(req,res)
{
    res.send({
        name: "sony",
        course : "mern"
    });
})
app.use('/auth',authR)
app.use(cors());
app.use("/api",DataRouter)
app.use(express.json())
app.use("/auth",Checking)


app.listen(port,function()
{
    console.log('application is running');
})