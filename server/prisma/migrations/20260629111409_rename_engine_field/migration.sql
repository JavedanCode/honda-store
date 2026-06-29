/*
  Warnings:

  - You are about to drop the column `engine` on the `Motorcycle` table. All the data in the column will be lost.
  - Added the required column `engineType` to the `Motorcycle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Motorcycle" DROP COLUMN "engine",
ADD COLUMN     "engineType" TEXT NOT NULL;
