import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { User } from './users/user.entity';
import { Report } from './reports/reports.entity';
export const typeOrmConfig:TypeOrmModuleOptions ={
    type:'postgres',
    database:'postgres',
    username: "postgres",
    password: "newpass123@gk",
    port:5432,
    entities: [User,Report],
    synchronize:true,
    logging: true,
    subscribers: [],
    migrations: [],
  }