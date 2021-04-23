import { IRace } from "./Irace";

export interface IDriver {
    _id:string;
    age:number;
    picture:string;
    name:string;
    team:string;
    posglobal:number;
    races: IRace[];
}