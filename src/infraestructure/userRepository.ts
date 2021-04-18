// Inversify
import { injectable } from "inversify"

// Interface
import { IUserRepository } from "../application/repositories/IUserRepository"

// Class
import UserModel from "./models/user"

@injectable()
export class UserRepository implements IUserRepository {

    constructor() {}

    async save(user: User): Promise<IUserDto> {
        const newUser = new UserModel(user)
        const userCreated: IUserDto = await newUser.save()
        return userCreated;
    }

    async getById(id: string): Promise<IUserDto> {
        const user: IUserDto | any = await UserModel.findOne({ id });
        return user;
    }

    async updateById(id: string, user: IUserDto): Promise<void> {
        await UserModel.updateOne({ id }, { $set: user });
    }

    async deleteById(id: string): Promise<void> {
        await UserModel.deleteOne({ id });
    }
        
}