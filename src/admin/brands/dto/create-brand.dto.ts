import { ApiProperty } from "@nestjs/swagger";

export class CreateBrandDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ required: false })
  description?: string;
}
