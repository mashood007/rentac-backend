import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BrandEntity } from './entities/brand.entity'

@Controller('brands')
@ApiTags('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) { }

  @Post()
  @ApiCreatedResponse({ type: BrandEntity })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

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
