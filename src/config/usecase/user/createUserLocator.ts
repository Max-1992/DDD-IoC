// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../../../constants/types"

// Interface
import { IUserRepository } from "../../../application/repositories/IUserRepository";

// Class
import CreateUserUseCase from "../../../application/usecase/createUser/createUser";

@injectable()
export default class CreateUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetCreateUserUseCase() {
        return new CreateUserUseCase(this.userRepository);
    }
}
