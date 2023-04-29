import { Injectable } from '@nestjs/common';
import { CreateCarModelDto } from './dto/create-car_model.dto';
import { UpdateCarModelDto } from './dto/update-car_model.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarModelsService {
  constructor(private prisma: PrismaService) { }

  create(createCarModelDto: CreateCarModelDto) {
    return this.prisma.carModel.create({ data: createCarModelDto })
  }

  findAll() {
    return this.prisma.carModel.findMany({});
  }

  findOne(id: number) {
    return this.prisma.carModel.findUnique({ where: { id } });
  }

  update(id: number, updateCarModelDto: UpdateCarModelDto) {
    return this.prisma.carModel.update({
      where: { id },
      data: updateCarModelDto,
    });
  }

  remove(id: number) {
    return this.prisma.carModel.delete({ where: { id } });
  }
}
