// Interface
import { IUserDto } from "../application/IUserDto";

export class User {

    private id: string
    private name: string
    private email: string
    private password: string
    private role: string
    private registrationDate: Date

    constructor(userDto: IUserDto) {
        this.id = userDto.id
        this.name = userDto.name
        this.email = userDto.email
        this.password = userDto.password
        this.role = userDto.role
        this.registrationDate = userDto.registrationDate
    }

}