import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { Address } from '../address/address.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ['addresses'] });
  }

  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: { id },
      relations: ['addresses'],
    });
  }

  async create(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create(studentData);
    return this.studentRepository.save(student);
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, studentData);
    return this.studentRepository.findOne({
      where: { id },
      relations: ['addresses'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
