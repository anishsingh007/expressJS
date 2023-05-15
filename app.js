const http = require("http");

const express =require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log(`ds`);
    res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title" placeholder="Product Title" required><br>
      <input type="number" name="size" placeholder="Product Size" required><br>
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    
        
});

app.use((req,res,next)=>{
    console.log("kaksaka");
    res.send('<h1> hello From Express </h1>');
    
})



app.listen(3000);