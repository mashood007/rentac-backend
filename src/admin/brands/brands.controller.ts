import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BrandEntity } from './entities/brand.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
@ApiTags('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) { }

  @Post()
  @ApiCreatedResponse({ type: BrandEntity })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiCreatedResponse({ type: BrandEntity, isArray: true })
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BrandEntity })
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BrandEntity })
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BrandEntity })
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
