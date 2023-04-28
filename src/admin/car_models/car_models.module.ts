import { Module } from '@nestjs/common';
import { CarModelsService } from './car_models.service';
import { CarModelsController } from './car_models.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CarModelsController],
  providers: [CarModelsService],
  imports: [PrismaModule],
})
export class CarModelsModule { }
