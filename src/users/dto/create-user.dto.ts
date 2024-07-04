import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Gabriel Feijó',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'gabriel.feijo@gmail.com',
    required: true,
  })
  @IsEmail()
  email: string;
}
