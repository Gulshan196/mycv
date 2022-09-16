
import Condition from "./Condition";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class Filter{

    
    conditions: Array<Condition>;

    constructor() {
        this.conditions = new Array<Condition>();
    }
}