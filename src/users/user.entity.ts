import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    example: 1,
    description: 'The ID of the User.',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Gabriel Feijó',
    description: 'The name of the User.',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'email@email.com',
    description: 'The email address of the User.',
  })
  @Column()
  email: string;
}
