import { CannotReflectMethodParameterTypeError, getCustomRepository } from "typeorm";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email,password}){

        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.findOne({email});

        if(!user){
            throw new Error("Email/Password Incorrect !")
        }

       const passwordVerify = await compare(password, user.password);

       if(!passwordVerify){
        throw new Error("Email/Password Incorrect !")
       }
       const token = sign({
           email
       },"aziazieazieiazieizai",{
           subject:user.id,
           expiresIn:"1d"
       })
       return token;

    }
}
export{AuthenticateUserService}