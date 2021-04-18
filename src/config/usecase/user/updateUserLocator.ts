// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../../../constants/types"

// Interface
import { IUserRepository } from "../../../application/repositories/IUserRepository";

// Class
import UpdateUserUseCase from "../../../application/usecase/updateUser/upadateUser";

@injectable()
export default class UpdateUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetUpdateUserUseCase() {
        return new UpdateUserUseCase(this.userRepository);
    }
}
