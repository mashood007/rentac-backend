import { Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin_user.dto';
import { UpdateAdminUserDto } from './dto/update-admin_user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminUsersService {
  constructor(private prisma: PrismaService) { }

  create(createAdminUserDto: CreateAdminUserDto) {
    return 'This action adds a new adminUser';
  }

  findAll() {
    return `This action returns all adminUsers`;
  }

  findOne(id: number) {
    return this.prisma.adminUser.findUnique({ where: { id } });
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return `This action updates a #${id} adminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUser`;
  }
}
