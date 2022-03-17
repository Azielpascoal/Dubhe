import { AuthenticateUserService } from "../services/AuthenticateUserService";
import {Request,Response} from "express"


class AuthenticateUserConntroller{
    async handle(req:Request,res:Response){

        const {email,password}= req.body;
        const authenticateService = new AuthenticateUserService();

        const token = await authenticateService.execute({email,password});

        return res.json(token);
    }
}

export {AuthenticateUserConntroller};