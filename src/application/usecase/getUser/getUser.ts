// Interface
import { IGetUserUseCase } from "./IGetUser";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserDto } from "../../../domain/IUserDto";


export default class GetUserUseCase implements IGetUserUseCase {

    constructor( private userRepository: IUserRepository ) {}

    async get(id: string): Promise<IUserDto> {
        const user = await this.userRepository.getById(id);
        return user;
    }
}