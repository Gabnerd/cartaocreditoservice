import { compare } from "bcryptjs";
import prismaClient from "../prisma"
import { sign } from "jsonwebtoken";

interface AuthRequest{
    numero: string,
    cvv: string
}

class AuthCardService{
    async execute({numero, cvv}: AuthRequest){
        const card = await prismaClient.cartao.findFirst({
            where:{
                numero: numero
            }
        });

        if(!card){
            throw new Error("Cartão não existe");
        }

        const cvvMatch = await compare(cvv, card.cvv);
        if(!cvvMatch){
            throw new Error("dados do cartão não conferem");
        }

        const token = sign(
            {
                numero: card.numero,
                nome_impresso: card.nome_impresso
            },
            process.env.JWT_SECRET,
            {
                subject: card.id,
                expiresIn: '30d'
            }
        )

        return {
            id: card.id,
            nome_impresso: card.nome_impresso,
            numero: card.numero,
            token: token
        }
    }
}

export {AuthCardService}