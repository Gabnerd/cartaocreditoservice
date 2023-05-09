-- CreateTable
CREATE TABLE "cartoes" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "nome_impresso" TEXT NOT NULL,
    "apelido_cartao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modificado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cartoes_pkey" PRIMARY KEY ("id")
);
