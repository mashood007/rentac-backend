import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { CarModelsModule } from './car_models/car_models.module';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { AdminUsersModule } from './admin_users/admin_users.module';
import { AdminUsersService } from './admin_users/admin_users.service';

@Module({
    imports: [BrandsModule, CarModelsModule, CarsModule, AuthModule, AdminUsersModule
    ]
})
export class AdminModule { }
