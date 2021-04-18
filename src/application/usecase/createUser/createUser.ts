// Interface
import { ICreateUserUseCase } from "./ICreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserDto } from "../../../domain/IUserDto";

// Class
import { User } from "../../../domain/user";

// Dependencies
import * as uuid from 'uuid'


export default class CreateUserUseCase implements ICreateUserUseCase {

    constructor (private userRepository: IUserRepository ) {}

    public async create(userDto: IUserDto): Promise<IUserDto> {
        try {
            const userDTO: IUserDto = userDto;

            // Create a unique Id for our user.
            userDTO.id = uuid.v4()

            // Create a Date High user.
            userDTO.registrationDate = new Date();
    
            // Capture the data sent by the request body.
            let user = new User(userDTO);

            // Call the repository method to create new user.
            const userCreated: IUserDto = await this.userRepository.save(user)

            if (!userCreated) {
                throw Error("We could not create the user")
            }
    
            return userCreated
            
        } catch (error) {
            console.error(error)
        }
    }

}