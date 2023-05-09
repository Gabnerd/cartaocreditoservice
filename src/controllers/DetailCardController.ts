import { Request, Response } from "express";
import { DetailCardService } from "../services/DetailCardService";

class DetailCardController{
    async handle(req: Request, res: Response){
        const detailCardService = new DetailCardService();
        const card = await detailCardService.execute();
        return res.json(card);
    }
}

export {DetailCardController}