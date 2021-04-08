import { IRace } from "../races/Irace";

export interface IDriver {
    id:string;
    age:number;
    picture:string;
    name:string;
    team:string;
    posglobal:number;
    races: IRace[];
}