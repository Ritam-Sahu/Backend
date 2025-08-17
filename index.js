require('dotenv').config()
// or 
// import dotenv from 'dotenv'
const express = require ('express')
// or 
// import express from "express"

const app = express()

const port = 4000

const githubData = {    
    success: true,
    user: "Rits" 
}


app.get('/',(req, res) => {
    res.send("hello World! ")
})

app.get("/twitter",(req, res) => {
    res.send("hello from Rits:)")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Rits you can do it</h1>')
    //we can send htm elemnt,cookie,json etc
})

app.get('/youtube',(req,res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/json',(req,res) => {
    res.json(githubData);
})

app.get('/redirect',(req,res) => {
    res.redirect('/'); // redirects to home page
})



app.listen(process.env.PORT, ()=>{
    console.log(`Example app/Server Listening on port ${port}`);
    
})