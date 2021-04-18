import "reflect-metadata"

// Inversify
import { Container } from "inversify"

// Types
import { TYPES } from "./constants/types"

// Interface
import { IUserRepository } from "./application/repositories/IUserRepository"

// Class
import { UserRepository } from "./infraestructure/userRepository"
import CreateUserServiceLocator from "./config/usecase/user/createUserLocator"
import GetUserServiceLocator from "./config/usecase/user/getUserServiceLocator"
import UpdateUserServiceLocator from "./config/usecase/user/updateUserLocator"
import DeleteUserServiceLocator from "./config/usecase/user/deleteUserLocator"

// Declare IoC
const container = new Container()

// set up bindings
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)
container.bind<CreateUserServiceLocator>(TYPES.CreateUserServiceLocator).to(CreateUserServiceLocator)
container.bind<GetUserServiceLocator>(TYPES.GetUserServiceLocator).to(GetUserServiceLocator)
container.bind<UpdateUserServiceLocator>(TYPES.UpdateUserServiceLocator).to(UpdateUserServiceLocator)
container.bind<DeleteUserServiceLocator>(TYPES.DeleteUserServiceLocator).to(DeleteUserServiceLocator)

export { container }