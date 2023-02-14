//Enums

// let petOnSale = 'chinchilla';
// let ordersArray = [
//     ['rat', 2],
//     ['chinchilla', 1],
//     ['hamster', 2],
//     ['chinchilla', 50]
// ];
//
// // Write your code below:
// enum Pet{
//     Hamster,
//     Rat,
//     Chinchilla,
//     Tarantula
// }
// const petOnSaleTS : Pet = Pet.Chinchilla;
//
// const ordersArrayTS: [Pet,number][] = [
//     [Pet.Rat,2],
//     [Pet.Chinchilla,1],
//     [Pet.Hamster,2],
//     [Pet.Tarantula,50]
// ];
// ordersArrayTS.push([Pet.Jerboa, 3]); //Error

//---------------------------String Enums vs. Numeric Enums

let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];

enum Pet {
    Hamster= 'HAMSTER',
    Rat = 'RAT',
    Chinchilla = 'CHINCHILLA',
    Tarantula = 'TARANTULA'
}

const petOnSaleTS: Pet = Pet.Chinchilla;

const ordersArrayTS: [Pet,number][] = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
]
ordersArrayTS.push([Pet.Tarantula, 1]);
console.log(ordersArrayTS);

//Object Types
type TPerson = {
    name : string,
    age: number,
    giftWish: string,
    success: boolean
}
function sayHappyBirthdayWithObject(personObject:TPerson){
    let output ='';
    output += 'Happy Birthday '
        + personObject.name + '! ';
    output += 'You are now '
        + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive '
        + personObject.giftWish
        + '. And guess what? You will ';
    if (!personObject.success){
        output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
}


let birthdayBabies: TPerson[] = [
    {name: 'Liam', age: 0, giftWish: 'karate skills', success: false},
    {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true},
    {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);

//---------------------------Type Aliases
// Add your type alias below:
type Coord = [number, number, string, number, number, string];


let codecademyCoordinates: Coord  = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];


//-------------------Function Types
// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (arg0 : number, arg1: number) => number

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback:OperatorFunction) {
    console.log("Let's learn how to", operationCallback.name,'!');
    let value25 = operationCallback(2,5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
    console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply);
// mathTutor(wrongAdd); Error

////-----------------Generic Types

// type Human = {name: string, job: string};
// type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
    parents: [T, T], mate: T, children: T[]
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily:Family<number> = {
    parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily:Family<boolean> = {
    parents: [true, true], mate: false,
    children: [false, false, true, true]
};

// let aFamily:Family<Human> = {
//     parents: [
//         {name: 'Mom', job: 'software engineer'},
//         {name: 'Dad', job: 'coding engineer'}
//     ],
//     mate: {name: 'Matesky', job: 'engineering coder'},
//     children: [{name: 'Babesky', job: 'none'}]
// };
//
// let anotherFamily:Family<Dog> = {
//     parents: [
//         {name: 'Momo', tailWagSpeed: 3},
//         {name: 'Dado', tailWagSpeed: 100}
//     ],
//     mate: {name: 'Cheems', tailWagSpeed: 7},
//     children: [
//         {name: 'Puppin', tailWagSpeed: 0.001},
//         {name: 'Puppenaut', tailWagSpeed: 0.0001},
//         {name: 'Puppenator', tailWagSpeed: 0.01}
//     ]
// };

///---------------------------------Generic Functions

function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:

stringArray = getFilledArray<string>('hi',6);
numberArray = getFilledArray<number>(9,6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24},6);
coordinateArray = getFilledArray<[number,number]>([3,4],6);

console.log(stringArray);


///-------------------------------- Test
//1
enum DogBreed {
    BullDog = 'Bull Dog',
    Poodle = 'Poodle',
    Beagle = 'Beagle'
};
enum Gender {
    Male = 'MALE',
    Female = 'FEMALE'
};
let petProfile: {
   breed: DogBreed,
    age: number,
    gender: Gender
}
petProfile = {breed: DogBreed.Poodle, age: 3, gender: Gender.Female};
console.log(petProfile);

//2
enum Price {
    Quart = 1.99,
    HalfGallon = 2.49,
    Gallon = 4.99
};
enum Size {
    Quart = 'Quart',
    HalfGallon = 'Half-Gallon',
    Gallon = 'Gallon'
};
console.log(`SALE on ${Size.HalfGallon} Milk! Only $${Price.HalfGallon}.`);

////3
function median<Item> (items: Array<Item>): Item

function median<Item> (items: Item[]): Item

function median<Item> (items: Array<Item>)

// function median(items: Item[]): Item Error
function median(items){
    items.sort();
    return items[Math.floor(items.length/2)];
}
console.log(median<number>([5, 9, 1, 2, 7])); // Prints 5

////4

// enum Status {
//     Open = 'OPENED',
//     Closed = 'CLOSED'
// };

// enum Status {
//     Open,
//     Closed
// };

// enum Status {
//     Open = true,
//     Closed = false
// };

// enum Status {
//     Open = 1,
//     Closed = 0
// };

///5

//
// type dish = [
//     name: string,
//     price: number,
//     servings: number
// ];
//
// let dish = {
//     name: string,
//     price: number,
//     servings: number
// };

// let dish: [
//     name: string,
//     price: number,
//     servings: number
// ];
//
type dish = {
    name: string,
    price: number,
    servings: number
};

const lunch1: dish = {name: 'Meatball Stew', price: 8.99, servings: 4};
