////Type guards

function formatStatistic(stat: string | number) {
    if(typeof stat == "number"){
        return stat.toFixed(2);
    }
    if(typeof stat == "string"){
        return stat.toUpperCase();
    }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

//Using in with Type Guards
type Cat = {
    name: string;
    run: () => string;
}

type Fish = {
    name: string;
    swim: () => string;
}

const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
}

const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
    if('run' in pet){
        return pet.run();
    }
    if('swim' in pet){
        return pet.swim();
    }
}

console.log(move(siameseCat))

////Narrowing with else

type Pasta = {
    menuName: string;
    boil: () => string;
}

type Meat = {
    menuName: string;
    panFry: () => string;
}

const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees',
}

const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees',
}

function prepareEntree(entree: Pasta | Meat) {
    if('boil' in entree){
        return entree.boil();
    } else {
        return entree.panFry();
    }
}

console.log(prepareEntree(fettuccine));

///Narrowing After a Type Guard

type Metal = {
    magnetize: () => string;
}

type Glass = {
    melt: () => string;
}

const iron = {
    magnetize: () => 'Electromagnet activated'
}

const bottle = {
    melt: () => 'Furnace set to 2,700 degrees'
}


function recycle(trash: Metal | Glass) {
    // Add your code below:
    if('magnetize' in trash){
        return trash.magnetize();
    }
    return trash.melt();
}

console.log(recycle(iron));
