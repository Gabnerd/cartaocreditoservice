import { Request, Response } from "express";
import { CreateCardService } from "../services/CreateCardService";

class CreateCardController{
    async handle(req: Request, res: Response){
        const {numero,cvv,nomeimpresso,vencimento,apelidocartao} = req.body;

        const createCardService = new CreateCardService();
        const card = await createCardService.execute({vencimento,apelidocartao,cvv,nomeimpresso,numero});

        return res.json(card);
    }
}

export {CreateCardController}