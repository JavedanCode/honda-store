/*
  Warnings:

  - You are about to drop the column `image` on the `Motorcycle` table. All the data in the column will be lost.
  - Added the required column `imagePath` to the `Motorcycle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Motorcycle" DROP COLUMN "image",
ADD COLUMN     "imagePath" TEXT NOT NULL;
