// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpPost, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../../../constants/types"

// Express
import { Request, Response } from "express"

// Interface
import { ICreateUserUseCase } from "../../../application/usecase/createUser/ICreateUser";
import { IUserDto } from "../../../domain/IUserDto";


// Class
import CreateUserServiceLocator from "../../../config/usecase/user/createUserLocator";


@controller("/api/v1/user")
export default class CreateUserController implements interfaces.Controller {

    private readonly createUserUseCase: ICreateUserUseCase;

    constructor(@inject(TYPES.CreateUserServiceLocator) serviceLocator: CreateUserServiceLocator) {
        this.createUserUseCase = serviceLocator.GetCreateUserUseCase()
    }

    @httpPost("/add")
    public async createUser(@request() req: Request, @response() res: Response) {
        try {

            // Get user data from request
            const userDto: IUserDto = req.body

            // Call the user creation service.
            const userCreated: IUserDto = await this.createUserUseCase.create(userDto)

            res.status(200).json({ ok: true, userCreated })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}
