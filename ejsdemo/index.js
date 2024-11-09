const express=require("express");
const path=require("path");

const app=express();
app.set('view engine', 'ejs');
app.set("views","./frontend");

app.get("/home",(req,res)=>{
   // res.send({message:"This is home page",status:"ok"});
   // console.log();
   //res.sendFile(path.join(__dirname,"/views/index.html"));

   res.render('index', {price:24000,color:"RED"});
})

app.get("/usecases",(req,res)=>{
      let {marks}=req.query;
      let arr=["amit","ashish","keyur","kaushal"];
      res.render("usecases",{name:"Albert",marks  , arr });
});

app.get("/carts",(req,res)=>{
      let arr=[
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdbF7gqB-8OCpWS91EVqiDuurauIiBiQ0dg&s",
             name:"Mobile",
             price:45674
            },
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdbF7gqB-8OCpWS91EVqiDuurauIiBiQ0dg&s",
            name:"Shoes",
            price:1000
            },
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdbF7gqB-8OCpWS91EVqiDuurauIiBiQ0dg&s",
            name:"Leptop",
            price:234534
            },
            {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdbF7gqB-8OCpWS91EVqiDuurauIiBiQ0dg&s",
            name:"t- shirt",
            price:10000
            },

      ]

      res.render("cart",{arr});
})

app.get("/",(req,res)=>{
        res.render("home",{title:"Home"});
})
app.get("/about",(req,res)=>{
      res.render("about",{title:"about"});
})
app.get("/contact",(req,res)=>{
      res.render("contact",{title:"contact"});
})

app.listen(3000,()=>{
      console.log("server is running on port 3000");
})