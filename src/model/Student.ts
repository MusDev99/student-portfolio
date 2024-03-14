import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  yearOfStudy: number;

  @Column()
  email: string;

  @Column()
  registrationNumber: string;
}