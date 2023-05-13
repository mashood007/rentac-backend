import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin_users.service';
import { AdminUsersController } from './admin_users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AdminUsersController],
  imports: [PrismaModule],
  providers: [AdminUsersService],
  exports: [AdminUsersService]
})
export class AdminUsersModule { }
