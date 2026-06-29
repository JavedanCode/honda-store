-- CreateTable
CREATE TABLE "Motorcycle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "engine" TEXT NOT NULL,
    "displacement" INTEGER NOT NULL,
    "horsepower" INTEGER,
    "torque" DOUBLE PRECISION,
    "transmission" TEXT NOT NULL,
    "cooling" TEXT NOT NULL,
    "weight" INTEGER,
    "seatHeight" INTEGER,
    "fuelCapacity" DOUBLE PRECISION,
    "topSpeed" INTEGER,
    "stock" INTEGER NOT NULL DEFAULT 10,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Motorcycle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Motorcycle_slug_key" ON "Motorcycle"("slug");
