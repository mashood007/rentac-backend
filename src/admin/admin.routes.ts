import { RouteTree } from '@nestjs/core';
import { BrandsModule } from './brands/brands.module';
import { CarModelsModule } from './car_models/car_models.module';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { AdminUsersModule } from './admin_users/admin_users.module';


export const AdminRoutes: RouteTree[] = [
  {
    path: 'brands',
    module: BrandsModule
  }, {
    path: 'car-models',
    module: CarModelsModule
  },
  {
    path: 'cars',
    module: CarsModule
  },
  {
    path: 'auth',
    module: AuthModule
  },
  {
    path: 'admin-users',
    module: AdminUsersModule
  }
];
