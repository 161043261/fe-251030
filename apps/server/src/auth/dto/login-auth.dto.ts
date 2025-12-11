import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty({ message: 'username is required' })
  username: string;

  @IsNotEmpty({ message: 'password is required' })
  @MinLength(4, { message: 'password must be more than 4 characters' })
  @MaxLength(24, { message: 'password must be less than 24 characters' })
  password: string;
}
