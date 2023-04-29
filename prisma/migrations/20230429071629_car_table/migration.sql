-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('petrol', 'diesel', 'hybrid', 'electric', 'other');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "year" INTEGER NOT NULL,
    "kilometers" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "fuelType" "FuelType" NOT NULL DEFAULT 'petrol',
    "horsePower" JSONB,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
