const express = require("express")
const app = express(); 
const {users,addUser,updateUser,deleteUser} = require("./user.js");
const userMongo = require("./models/users.js");
 
app.use(express.json()); //middleware
//routes 
app.get('/',(req,res) => {
    res.send("Hello Express Js");
});

app.get('/user',(req,res)=>{
    // res.json(user); // both are same commands 
    // res.send(JSON.stringify(users));

    userMongo.find().then((users) => res.json(users)).catch((err) => console.log(err));
});

app.get('/user/:id',(req,res)=>{
    // const id = req.params.id;
    // const user = users.find((user) => user.id == id);
    // res.send(JSON.stringify(user));

    const id = req.params.id;
    userMongo.findById(id).then((user) => res.json(user)).catch((err) => console.log(err));

});

//post api.

;
app.post('/user',(req,res)=>{
    // addUser(req.body);
    console.log(req.body);  
    
    // res.json(users);
    const newUser = new userMongo({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    newUser.save().then((user) => res.json(user)).catch((err) => console.log(err));
}
);

//update & put api
app.put('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = req.body;
    updateUser(id,user);
    res.json(users);
});

//delete api
app.delete('/user/:id',(req,res)=>{
    const id = req.params.id;
    deleteUser(id);
    res.json(users);
});
//server
app.listen(8080, () => {
    console.log("Server running on port 8080")
    console.log("http://localhost:8080")
});

const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://shammaskhan90321:Shammas0312@cluster01.wreridz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl).then((res) => console.log("Connected to DB")).catch((err) => console.log(err));