// Interface
import { IUserDto } from "../../../domain/IUserDto";

export interface IUpdateUserUseCase {
    update(id: string, user: IUserDto): Promise<void>
}