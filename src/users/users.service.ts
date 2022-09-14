import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){
        
    }
    create(firstname:string, lastname:string, age:number){
        const user = this.repo.create({firstname,lastname,age});
        return this.repo.save(user)
    }

     async findAll(){
        const user  = await this.repo.find()
        return user
    }
}

