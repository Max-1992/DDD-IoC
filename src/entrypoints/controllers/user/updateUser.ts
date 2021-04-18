// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpPut, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../../../constants/types"

// Express
import { Request, Response } from "express"

// Interface
import { IUserDto } from "../../../domain/IUserDto";
import { IUpdateUserUseCase } from "../../../application/usecase/updateUser/IUpdateUser";

// Class
import UpdateUserServiceLocator from "../../../config/usecase/user/updateUserLocator";


@controller("/api/v1/user")
export default class UpdateUserController implements interfaces.Controller {

    private readonly updateUserUseCase: IUpdateUserUseCase;

    constructor(@inject(TYPES.UpdateUserServiceLocator) private serviceLocator: UpdateUserServiceLocator) {
        this.updateUserUseCase = this.serviceLocator.GetUpdateUserUseCase();
    }

    @httpPut("/update/:id")
    public async updateUser(@request() req: Request, @response() res: Response) {
        try {

            // Get id from path params
            const { id } = req.params

            // Get user data from request
            const userDto: IUserDto = req.body

            // Call the user creation service.
            await this.updateUserUseCase.update(id, userDto)

            const message = `User data was updated successfully.`

            res.status(200).json({ ok: true, message })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}
