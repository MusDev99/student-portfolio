import { Injectable } from '@nestjs/common';
import { CreateStudentRequest } from 'src/dto/request/Student/CreateStudentRequest';
import { UpdateStudentRequest } from 'src/dto/request/Student/UpdateStudentRequest';
import { StudentDetails } from 'src/dto/response/Student/StudentDetails';
import { Student } from 'src/model/Student';

@Injectable()
export class StudentsService {

    findAll(){
        return []
    }
    
    findOne(id: number){

        return true

    }

    async create(CreateStudentRequest: CreateStudentRequest){

        const student = new Student;
        student.name = CreateStudentRequest.name;
        student.yearOfStudy = CreateStudentRequest.yearOfStudy;
        student.email = CreateStudentRequest.email;
        student.registrationNumber = CreateStudentRequest.registrationNumber;

        return {
            status: 201, // Created
            data: student,
            message: 'Student created successfully'
        };
    }

    update(id: number, UpdateStudentRequest: UpdateStudentRequest){

        const student = this.findOne(id)

        if (student){
            return student
        }

        return null

    }

    remove(id: number){

        const student = this.findOne(id)

        if(student)
        return "Deleted"
        
    }
    

    
}
