// Interface
import { IUserDto } from "../../../domain/IUserDto";


export interface ICreateUserUseCase {
    create(user: IUserDto): Promise<IUserDto>
}