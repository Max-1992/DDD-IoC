// Inversify
import { inject } from "inversify"

// Inversify Express
import {controller, httpDelete, interfaces, request, response } from "inversify-express-utils"

// Types
import { TYPES } from "../../../constants/types"

// Express
import { Request, Response } from "express"

// Interface
import { IDeleteUserUseCase } from "../../../application/usecase/deleteUser/IDeleteUser"

// Class
import DeleteUserServiceLocator from "../../../config/usecase/user/deleteUserLocator"


@controller('/api/v1/user')
export default class DeleteUserServiceController implements interfaces.Controller {

     private readonly deleteUserUseCase: IDeleteUserUseCase

    constructor( @inject(TYPES.DeleteUserServiceLocator) private serviceLocator: DeleteUserServiceLocator ) {
         this.deleteUserUseCase = this.serviceLocator.GetDeleteUserUseCase();
    }

    @httpDelete('/delete/:id')
    async deleteUser(@request() req: Request, @response() res: Response) {
       try {
            const { id } = req.params;
            await this.deleteUserUseCase.delete(id);

            const message = `User data was successfully deleted.`;

            res.status(200).json({ ok: true, message });
       } catch (err) {
            res.status(400).json({error: err.message})
       }
    }

}
