import { ApiProperty } from "@nestjs/swagger";
import { FuelType } from "@prisma/client";

export class CreateCarDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  kilometers: number

  @ApiProperty()
  color: string

  @ApiProperty()
  fuelType: FuelType

  @ApiProperty()
  horsePower: any

  @ApiProperty()
  carModelId: number

  @ApiProperty()
  brandId: number
}
