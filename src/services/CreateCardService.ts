import prismaClient from "../prisma";
import {hash} from 'bcryptjs'

interface CardRequest{
    numero: string,
    cvv: string,
    nomeimpresso: string,
    vencimento: string,
    apelidocartao: string
}

class CreateCardService{
    async execute({vencimento,apelidocartao,cvv,nomeimpresso,numero}:CardRequest){
        if(!numero){
            throw new Error("Numero não enviado!");
        }
        if(!nomeimpresso){
            throw new Error("Nome do dono do cartão não enviado!");
        }
        
        if(!vencimento){
            throw new Error("Vencimento não enviado!");
        }
        if(!apelidocartao){
            throw new Error("Apelido não enviado!");
        }
        if(!cvv){
            throw new Error("CVV não enviado!");
        }

        const CardAlreadyExists = await prismaClient.cartao.findFirst({
            where:{
                numero: numero
            }
        });

        if(CardAlreadyExists){
            throw new Error("Cartão já cadastrado!");
        }
            
        const cvvHash = await hash(cvv, 8);

        const card = await prismaClient.cartao.create({
            data:{
                nome_impresso: nomeimpresso,
                apelido_cartao:apelidocartao,
                cvv: cvvHash,
                numero: numero,
                vencimento: vencimento
            },
            select:{
                id: true,
                apelido_cartao: true,
                numero: true,
                nome_impresso: true
            }
        });

        return card;
    }
}

export {CreateCardService}