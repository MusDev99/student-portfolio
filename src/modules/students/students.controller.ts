import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentRequest } from 'src/dto/request/Student/CreateStudentRequest';
import { UpdateStudentRequest } from 'src/dto/request/Student/UpdateStudentRequest';


@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id); // Convert string ID to number
  }

  @Post()
  create(@Body() CreateStudentRequest: CreateStudentRequest) {
    return this.studentsService.create(CreateStudentRequest);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateStudentRequest: UpdateStudentRequest) {
    return this.studentsService.update(+id, UpdateStudentRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
