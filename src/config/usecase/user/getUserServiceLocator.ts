// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../../../constants/types"

// Interface
import { IUserRepository } from "../../../application/repositories/IUserRepository";

// Class
import GetUserUseCase from "../../../application/usecase/getUser/getUser";


@injectable()
export default class GetUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetUserUseCase() {
        return new GetUserUseCase(this.userRepository);
    }
}