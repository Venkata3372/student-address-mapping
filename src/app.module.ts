import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Venkata7202',
      database: 'student_address_db',
      entities: ['C:\\Users\\VenkataLakshmiNaraya\\student-address-app\\dist\\**\\*.entity.js'],
      synchronize: true,
    }),
    StudentModule,
    AddressModule,
  ],
})
export class AppModule {}
