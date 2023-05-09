/*
  Warnings:

  - Added the required column `ano_vencimento` to the `cartoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mes_vencimento` to the `cartoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cartoes" ADD COLUMN     "ano_vencimento" TEXT NOT NULL,
ADD COLUMN     "mes_vencimento" TEXT NOT NULL;
