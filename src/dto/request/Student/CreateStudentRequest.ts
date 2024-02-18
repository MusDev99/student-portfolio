import { IsString, IsEmail, IsNumber, Validate } from 'class-validator';

export class CreateStudentRequest {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  registrationNumber: string;

  @IsNumber()
  yearOfStudy: number;
}
