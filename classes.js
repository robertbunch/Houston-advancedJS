
// const today = new Date();
// console.log(today)

// =========pre-2015 (ES6)=========
// function SuperHero(name,strength,speed,weapon,cape){
//     this.name = name;
//     this.strength = strength;
//     this.speed = speed;
//     this.weapon = weapon;
//     this.cape = cape;
//     // this.powerUp = function(){
//     //     this.strength += 15;
//     // }
// }

// SuperHero.prototype.powerUp = function(){
//     this.powerUp = function(){
//         console.log(this.strength);
//         this.strength += 15;
//         console.log(this.strength);
//     }
// }
// SuperHero.prototype.species = "human";


// const hero1 = new SuperHero('Steven',10,'slow','keyboard',false);
// const hero2 = new SuperHero('Damon',15,'fast','axe',true);
// const hero3 = new SuperHero('Can',5,'lightning','wit',false);
// const hero4 = new SuperHero('Ephriam',35,'very slow','beast mode',false);
// const hero5 = new SuperHero('Dennis Rodman',35,'fast','wierd',false);
// console.log(hero1);
// console.log(hero1.name)
// console.log(hero1.strength)
// hero1.powerUp();
// console.log(hero1.strength)

// console.log(hero4.species)
// hero5.species = "Alien";
// console.log(hero4.species)
// console.log(hero5.species)

// const arr = [1,2,3,4];
// arr.map = "haha, i took map away";
// console.log(arr.map)


// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// function Rectangle(height, widht){
//     this.height= height;
//     this.widht =widht
// }

// function SuperHero(name,strength,speed,weapon,cape){
//     this.name = name;
//     this.strength = strength;
//     this.speed = speed;
//     this.weapon = weapon;
//     this.cape = cape;
//     // this.powerUp = function(){
//     //     this.strength += 15;
//     // }
// }

class SuperHero{
    constructor(name,strength,speed,weapon,cape){
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.weapon = weapon;
        this.cape = cape;
    }
    powerUp(){
        this.strength+=15 //automatically prototyped!!
    }
}

const hero = new SuperHero('Rob',1,1,'fist',false);
console.log(hero.name)

hero.powerUp();

// =============static=============

class DoMath{
    static add(x,y){
        return x + y;
    }
    static subtract(x,y){
        return x - y;
    }
}

console.log(DoMath.add(1,2))

// =============extends============
class Car{
    constructor(make, model, mpg){
        this.make=make;
        this.model = model;
        this.mpg = mpg
    }
    turnOn(){
        console.log("Vroooom");
    }
    break(){
        console.log("stop");
    }
    accel(){
        console.log("Go!");
    }
}

class ElectricCar extends Car{
    constructor(){
        super(); //calls the parent/super class's constructor method
    }
    chargeBattery(){
        console.log("charging...")
    }
    turnOn(){
        console.log("----------");
    }
}

const myCar = new Car("Toyota","Corolla",40);
console.log(myCar.mpg)
myCar.turnOn();

const myECar = new ElectricCar("tesla","S",null);
myECar.turnOn();
console.log(myECar.make);
myECar.turnOn();







