import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { typeOrmConfig } from './typeorm.config';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),UsersModule, ReportsModule,EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
