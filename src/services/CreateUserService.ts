import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    lastname: string;
    gender: string;
    birthdate: string;
    cpf: string;
    phone: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, lastname, gender, birthdate, cpf, phone, email, password }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);
        if (!email) {
            throw new Error("Email Incorrect !");
        }
        const userAlreadyExists = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new Error("User Already Exists !");
        }
        const passwordhash = await hash(password, 8)
        const user = userRepository.create({
            name,
            lastname,
            gender,
            birthdate,
            cpf,
            phone,
            email,
            password: passwordhash
        })

        await userRepository.save(user);

        return user;

    }
}
export { CreateUserService }