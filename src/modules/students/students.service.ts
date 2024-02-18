import { Injectable } from '@nestjs/common';
import { CreateStudentRequest } from 'src/dto/request/Student/CreateStudentRequest';
import { UpdateStudentRequest } from 'src/dto/request/Student/UpdateStudentRequest';
import { StudentDetails } from 'src/dto/response/Student/StudentDetails';

@Injectable()
export class StudentsService {

    findAll(){

        return []
    }
    
    findOne(id: number){

        return true

    }

    create(CreateStudentRequest: CreateStudentRequest){

    }

    update(id: number, UpdateStudentRequest: UpdateStudentRequest){

        const student = this.findOne(id)


        return student;

    }

    remove(id: number){

        const student = this.findOne(id)

        if(student)
        return "Deleted"
        
    }
    

    
}
