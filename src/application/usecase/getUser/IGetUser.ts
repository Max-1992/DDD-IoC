// Interface
import { IUserDto } from "../../../domain/IUserDto";

export interface IGetUserUseCase {
    get(id: string): Promise<IUserDto>
}