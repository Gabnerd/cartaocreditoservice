/*
  Warnings:

  - You are about to drop the column `ano_vencimento` on the `cartoes` table. All the data in the column will be lost.
  - You are about to drop the column `mes_vencimento` on the `cartoes` table. All the data in the column will be lost.
  - Added the required column `vencimento` to the `cartoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cartoes" DROP COLUMN "ano_vencimento",
DROP COLUMN "mes_vencimento",
ADD COLUMN     "vencimento" TEXT NOT NULL;
