-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('SUV', 'COUPE', 'SEDAN', 'HATCHBACK', 'CROSSOVER', 'MINIVAN');

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "brandId" INTEGER NOT NULL,
    "bodyType" "BodyType" NOT NULL DEFAULT 'SUV',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
