
const massive=require('massive');
const express=require('express');
const bodyParser=require('body-parser');
const controller=require('./controller.js');

const app=express();

app.use(bodyParser.json());


// massive({
//     host:'ec2-54-235-212-58.compute-1.amazonaws.com',
//     database:'d3rkrkfls8dp9s',
//     user:'mkgtedefwdxsnu',
//     password:'387667cd7714e2762b8fd896e39f22517baf95c097cb0670c36406cebdab2b0e',
//     port:5432,
//     ssl:true
// }).then(function(db){
//     app.set('db',db);
// })

app.get('/api/products',controller.getStuff);

app.post('/api/stuff',controller.addStuff);

app.delete('/api/stuff/:index',controller.deleteStuff);

app.put('/api/stuff/:index',controller.updateStuff);




app.listen(3035,()=>console.log('Welcome back Mr. Bond'))