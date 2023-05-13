import { PartialType } from '@nestjs/swagger';
import { CreateAdminUserDto } from './create-admin_user.dto';

export class UpdateAdminUserDto extends PartialType(CreateAdminUserDto) {}
