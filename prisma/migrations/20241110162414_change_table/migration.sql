/*
  Warnings:

  - You are about to drop the `Authors` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Members" ALTER COLUMN "membershipDate" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Authors";
