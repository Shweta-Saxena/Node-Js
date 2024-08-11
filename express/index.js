const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname,"public");

app.use(express.static(publicPath))

app.get("",(req,res)=>{
    res.send(`
    <div>
    <h1>Enter name </h1>
    <a href="/about.html">About us</a>
    <a href="/help">Help</a>
    </div>
    <input type="text" placeholder="Enter Your Name" value=${req.query.name} />
    <button>Click Me</button>`)
})



app.get("/help",(req,res)=>{
    res.send("<h1>This is Help us page</h1>")
})

app.listen(8000);