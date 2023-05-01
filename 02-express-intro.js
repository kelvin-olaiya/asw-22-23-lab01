const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.post('/student',(req, res)=>{
    console.log(req.body)
    res.redirect('/');
})

app.get('/',(req,res) => {
    res.send(```
        <form action="/student" method="POST">
            <input type="text" name="student"/>
            <button type="submit">add</button>
        </form>```
    );
});

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
