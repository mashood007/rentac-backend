import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarModelsModule } from './car_models/car_models.module';

@Module({
    imports: [BrandsModule, CarModelsModule]
})
export class AdminModule { }
