// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpGet, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../../../constants/types"

// Express
import { Request, Response } from "express"

// Interface
import { IUserDto } from "../../../domain/IUserDto";
import { IGetUserUseCase } from "../../../application/usecase/getUser/IGetUser";

// Class
import GetUserServiceLocator from "../../../config/usecase/user/getUserServiceLocator";


@controller('/api/v1/user')
export default class GetUserController implements interfaces.Controller {

    private readonly getUserUseCase: IGetUserUseCase;

    constructor(@inject(TYPES.GetUserServiceLocator) serviceLocator: GetUserServiceLocator ) {
        this.getUserUseCase = serviceLocator.GetUserUseCase()
    }

    @httpGet('/:id')
    async getUser(@request() req: Request, @response() res: Response) {
        try {
            // Get userId from request
            const { id } = req.params;
            const user: IUserDto = await this.getUserUseCase.get(id);

            res.status(200).json({ ok: true, user });
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }

}