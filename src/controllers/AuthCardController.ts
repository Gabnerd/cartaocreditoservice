import { Request, Response } from "express";
import { AuthCardService } from "../services/AuthCardService";

class AuthCardController{
    async handle(req: Request ,res: Response){
        const {numero, cvv} = req.body;

        const authCardService = new AuthCardService();

        const auth = await authCardService.execute({
            numero,
            cvv
        });

        return res.json(auth);
    }
}

export {AuthCardController}