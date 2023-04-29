import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarModelsModule } from './car_models/car_models.module';
import { CarsModule } from './cars/cars.module';

@Module({
    imports: [BrandsModule, CarModelsModule, CarsModule]
})
export class AdminModule { }
