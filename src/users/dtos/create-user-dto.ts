import {IsNumber,IsString} from 'class-validator'

export class createUserDto{
    @IsString()
    firstname:string;

    @IsString()
    lastname:string;

    @IsNumber()
    age:number;
}