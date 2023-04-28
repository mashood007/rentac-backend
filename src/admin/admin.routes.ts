import { RouteTree } from '@nestjs/core';
import { BrandsModule } from './brands/brands.module';
import { CarModelsModule } from './car_models/car_models.module';


export const AdminRoutes: RouteTree[] = [
    {
        path: 'brands',
        module: BrandsModule
    }, {
        path: 'car-models',
        module: CarModelsModule
    }
];
