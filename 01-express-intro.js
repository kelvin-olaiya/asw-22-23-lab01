const express = require('express');
const app = express();
app.use('/test', (req,res,next)=>{
    res.send('<h1>TEST</h1>')
})

app.use('/',(req,res,next)=>{
    if (req.url !== '/') {
        res.send("<h1>Page not found</h1>");
    } else {
        next();
    }
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Ciao Express</h1>');
})


app.listen(3000, ()=>{
    console.log('listening on http://localhost:3000');
})