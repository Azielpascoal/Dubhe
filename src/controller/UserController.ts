import {Request,Response} from "express"
import { CreateUserService } from "../services/CreateUserService";


class UserController{
    async handle(req:Request,res:Response){
        try{
            const {name,lastname,gender,birthdate,cpf,phone,email,password} = req.body;
            const createUserService = new CreateUserService();
    
            const user = createUserService.execute({name,lastname,gender,birthdate,cpf,phone,email,password});
    
            return res.json(user);
        }
        catch (err){
            return res.status(400).json(err.message)
        }
       
    }
    


}
export {UserController}