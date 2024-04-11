import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port =3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("Ankit Thakur is testing");
});
app.get("/data",(req,res)=>{
    console.log("Hello Ankit");
});

app.listen(port,(req,res)=>{
    console.log(`port working at ${port}`);
});





