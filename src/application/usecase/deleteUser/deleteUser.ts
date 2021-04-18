// Interface
import { IDeleteUserUseCase } from "./IDeleteUser";
import { IUserRepository } from "../../repositories/IUserRepository";

export default class DeleteUserUserCase implements IDeleteUserUseCase {

    constructor(private userRepository: IUserRepository) {}

    async delete(id: string): Promise<void> {
        await this.userRepository.deleteById(id);
    }

}