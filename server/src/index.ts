//tZLt0ObA1wrN5EC3 mervecelik

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// mongoose.connect('mongodb://localhost/finance-track', {useNewUrlParser: true, useUnifiedTopology: true})


  
const mongoURI: string = "mongodb+srv://mervecelik:WKlCR9IpXbqAYKrD@personalfinancetracker.rbwar.mongodb.net/";


mongoose.connect(mongoURI)
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.error("failed to connect mongodv",err));

app.use("/financial-records",financialRecordRouter);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
 
})