// Inversify
import { inject, injectable } from "inversify";

// Types
import { TYPES } from "../../../constants/types"

// Interface
import { IUserRepository } from "../../../application/repositories/IUserRepository";

// Class
import DeleteUserUserCase from '../../../application/usecase/deleteUser/deleteUser'


@injectable()
export default class DeleteUserServiceLocator {

    constructor( @inject(TYPES.IUserRepository) private userRepository: IUserRepository ) { }

    public GetDeleteUserUseCase() {
        return new DeleteUserUserCase(this.userRepository);
    }
}
