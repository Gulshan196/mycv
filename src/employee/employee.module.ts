import { Module } from '@nestjs/common';
import { Employee } from 'src/Entities/Employee';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({imports: [ TypeOrmModule.forFeature([Employee]) ]})
export class EmployeeModule {}
