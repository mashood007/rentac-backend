import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
// import { BrandsModule } from './admin/brands/brands.module';
// import { CarModelsModule } from './admin/car_models/car_models.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@nestjs/core';
import { AdminRoutes } from './admin/admin.routes';

@Module({
  imports: [PrismaModule,
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
        children: [...AdminRoutes]
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
