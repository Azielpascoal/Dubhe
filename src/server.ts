import "reflect-metadata";
import express, { NextFunction ,Request,Response} from "express";
import {router} from "./routes";
import "express-async-error";

import "./database"
const app = express();
app.use(express.json())
app.use(router);

app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    if(error instanceof Error){
        return res.status(400).json({error: error.message});
    }
    return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
    })
})

app.listen(3000,()=> console.log("Server is running"));