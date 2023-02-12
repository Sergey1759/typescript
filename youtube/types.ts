const str:string = 'new string';
const bool:boolean = true;

const int:number = 3;
const float:number = 3.1415926;
const num:number = 16e10;

const arrayNumber:number[] = [1,2,3,];
const arrayNumber2:Array<number> = [1,2,3,];

//Tuple
const contact:[number,string] = [1,'Sergey'];

let variable: any = 'sdf';
variable = 2;

const test = (): string => 'Hello';

interface IUser {
    name: string;
    id: number;
}



class User implements IUser{
    constructor(public name:string,public id:number) {}
    log():void{
        console.log(this.text());
    }
    private text():string{
        return this.id + " " + this.name
    }
    public getUser(){
        return this
    }
}
let user:User = new User('Sergey', 1);
user.log();
console.log(user);
console.log(user.getUser())

