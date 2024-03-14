import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentRequest } from 'src/dto/request/Student/CreateStudentRequest';
import { UpdateStudentRequest } from 'src/dto/request/Student/UpdateStudentRequest';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll(@Req() request: Request): void {
    try {
      this.studentsService.findAll();
    } catch (error) {
      throw new HttpException('Empty', HttpStatus.NO_CONTENT);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): boolean {
    return this.studentsService.findOne(+id); // Convert string ID to number
  }

  @Post()
  create(@Body() CreateStudentRequest: CreateStudentRequest): any {
    try {
      return this.studentsService.create(CreateStudentRequest);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateStudentRequest: UpdateStudentRequest,
  ): any {
    try {
      return this.studentsService.update(+id, UpdateStudentRequest);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.studentsService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
