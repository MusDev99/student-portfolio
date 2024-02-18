import { IsString, IsEmail, IsNumber, Validate } from 'class-validator';
export class UpdateStudentRequest {

  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  registrationNumber?: string;

  @IsNumber()
  yearOfStudy?: number;

}
