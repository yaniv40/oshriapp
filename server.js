const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('mongoose');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static('pages'));



db.connect('mongodb+srv://yaniv:ya1982alm$@cluster0.6nixjsx.mongodb.net/testuser',()=>{
    console.log('db on');
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/pages/home.html')
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname + '/pages/signup.html')
})

app.get('/signin',(req,res)=>{
    res.sendFile(__dirname + '/pages/signin.html')
})

app.get('/easy',(req,res)=>{
    res.sendFile(__dirname + '/pages/easy.html')
})

app.get('/hard',(req,res)=>{
    res.sendFile(__dirname + '/pages/hard.html')
})
app.get('/medium',(req,res)=>{
    res.sendFile(__dirname + '/pages/medium.html')
})
app.get('/menu',(req,res)=>{
    res.sendFile(__dirname + '/pages/menu.html')
})



const userSchema = db.Schema ({
    firstName:String,
    lastName : String,
    email : String,
    password : String,
    confirmPassword:String

})
const dbGuest = db.model('guest',userSchema);
app.post('/signup',(req,res)=>{
    let temp = {
        firstName: req.body.name,
        lastName : req.body.lastName,
        email: req.body.email,
        password : req.body.password,
    }
   
    const addUserToDb = async (tp)=>{
        await dbGuest.insertMany (tp)
        res.sendFile(__dirname + '/pages/signin.html')
    }
    addUserToDb(temp)
})

app.post('/signin', (req, res) => {
    const findguest = async() => {
        let result = await dbGuest.findOne({email:req.body.email,password:req.body.password});
        console.log(result);
        if (result == null) {
            res.sendFile(__dirname + '/pages/signup.html')
        } else {
           res.sendFile(__dirname+ '/pages/menu.html')
        }


    }


    findguest()
})


app.listen(3000,()=>{
    console.log('server works on port 3000');
});