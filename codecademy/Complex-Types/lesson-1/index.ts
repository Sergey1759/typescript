let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

function checkCustomersArray(array:(string|number)[]){
    array.forEach(element => {
        if (typeof element == 'number') console.log(`Type error: ${element} should be a string!`)
    })
}
function stringPush(val){
    if(typeof val === 'string') {
        customersArray.push(val)
    }
}

checkCustomersArray(customersArray);

///////////////////////// Array Type Annotations
// Arrays:
let bestNumbers:number[] = [7,77,4];
let bestLunches:string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts:string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans:boolean[] = [true, false];

/////////////////////      Multi-dimensional Arrays

let bestMealPlan:string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice:(boolean[])[] = [bestBooleans, bestBooleans];
let numbersMulti:number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

//Tuples

let favoriteCoordinates:[number,number,string,number,number,string] = [40, 43.2, 'N', 73, 59.8, 'W'];
favoriteCoordinates=[17,45,'N',142,30,'E']

//////Array Type Inference
// Don't change this part:
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

// Your code goes here:
let myArr = dogTup.concat(dogTup);
myArr[50] = 'not a dog'
console.log(myArr);

//Rest Parameters

function addPower(p:number, ...numsToAdd:number[]):number{
    let answer = 0;
    for(let i = 0; i < numsToAdd.length; i++){
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
// addPower('a string', 4, 5, 6);

////Spread Syntax
function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
        console.log('I do it with flair!');
    }
}

// let danceMoves:Array<[string,number,boolean]> = [
let danceMoves:[string,number,boolean][] = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];

danceMoves.forEach(move =>{
    performDanceMove(...move)
})

//TEST
let dinner: string[] = ['Chicken Pot Pie', 'Brisket', 'Spaghetti'];
let lunch: string[] = ['Sandwich', 'Soup', 'Bread']
let todaysMenu:string[][] = [['Cereal', 'Toast'], dinner];
let weeklyMenu:string[][][]  = [todaysMenu, [lunch]];

console.log(todaysMenu)
console.log(weeklyMenu)

//2
let praises: string[][] = [];
let messages: string[] = ['love it', 'cool', 'awesome', 'magnificent', 'superb', 'great'];

for (let i = 0; i < 5; i++) {
    praises.push(
        [messages[Math.floor(Math.random() * 6)]]
    );
}
console.log(praises);

//3
const policy = (name: string, age: number, minor: boolean) => {
    if (minor) {
        console.log(`No wine or alchohol purchase allowed for ${name} who is ${age} years old.`);
    }
}
const adult: [string, number, boolean] = ['Dan', 21, false];
policy(...adult);

//4

const range = (...myData: number[]) => {
    myData.sort();
    return myData[myData.length-1] - myData[0];
}


console.log(range());
console.log(range(1));
console.log(range(3, 7, 5));
// console.log(range([3, 7, 5])); ERROR type number[][] in range function type number[]

