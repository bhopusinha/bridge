const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const path=require('path');

// routes
const quoteRouter = require('./routes/quoteRoutes');
const tokenRouter = require('./routes/tokenRoutes');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// variable
dotenv.config();
const PORT=process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send("hello from server ");
// })

app.use('/tokens',tokenRouter);
app.use('/quotes',quoteRouter);

app.use(express.static(path.join(__dirname,'./frontend/dist')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/dist/index.html'));
})

// server running 
app.listen(PORT,()=>{
    console.log(`server is live http://localhost/${PORT}`);
})