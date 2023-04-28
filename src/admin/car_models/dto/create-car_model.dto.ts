import { ApiProperty } from "@nestjs/swagger";
import { BodyType } from "@prisma/client";

export class CreateCarModelDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty()
    brandId: number;

    @ApiProperty()
    bodyType?: BodyType;
}
