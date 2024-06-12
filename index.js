const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("salman farsee");
});

app.get('/twitter',(req,res)=>{
    res.send("salmandotcom");
})
const port=3000;
app.listen(port,()=>{
    console.log("app listening on ${port}");
});