// Interface
import { IUserDto } from "../application/IUserDto";

// Class
import { User } from "../entities/user";


export interface IUserRepository {
    save(user: User): Promise<IUserDto>
    getById(id: string): Promise<IUserDto>
    updateById(id: string, data: IUserDto): Promise<void>
    deleteById(id: string): Promise<void>
}