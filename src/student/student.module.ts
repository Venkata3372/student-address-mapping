import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Address } from '../address/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Address])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
