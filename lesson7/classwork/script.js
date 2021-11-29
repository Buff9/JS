//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function  Cars(model, maker, year, speed, engine){
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     //    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function (){
//         console.log(`Model - ${this.model}`, `Maker - ${this.maker}`, `Year - ${this.year}`, `Max-speed - ${this.speed}`,
//         `Engine - ${this.engine}`);
//     }
//     //    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed){
//         console.log(this.speed = this.speed + newSpeed);
//     }
//     //    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver){
//         console.log(this.driver = driver);
//     }
// }
// let carList = new Cars('F-150 Raptor', 'Ford', '2020 ', 210, '2687')
// console.log(carList);
// carList.drive()
// carList.info()
// carList.increaseMaxSpeed(50)
// carList.addDriver('Vasya')


//- (Те саме, тільки через клас)
// class Cars{
//     constructor(model, maker, year, speed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//         //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//         this.drive = function (){
//             console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//         }
//         //    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         this.info = function (){
//             console.log(`Model - ${this.model}`, `Maker - ${this.maker}`, `Year - ${this.year}`, `Max-speed - ${this.speed}`,
//                 `Engine - ${this.engine}`);
//         }
//         //    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//         this.increaseMaxSpeed = function (newSpeed){
//             console.log(this.speed = this.speed + newSpeed);
//         }
//         //    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//         this.addDriver = function (driver){
//             console.log(this.driver = driver);
//         }
//     }
// }
// let carList = new Cars('F-150 Raptor', 'Ford', '2020 ', 210, '2687')
// console.log(carList);
// carList.drive()
// carList.info()
// carList.increaseMaxSpeed(50)
// carList.addDriver('Vasya')


//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// debugger
// function Cinderella(name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// let CinderellaArr = [
//     new Cinderella('name1', '25', '39'),
//     new Cinderella('name2', '22', '38'),
//     new Cinderella('name3', '29', '41'),
//     new Cinderella('name4', '19', '40'),
//     new Cinderella('name5', '28', '39'),
//     new Cinderella('name6', '31', '37'),
//     new Cinderella('name7', '23', '38'),
//     new Cinderella('name8', '26', '39'),
//     new Cinderella('name9', '20', '37'),
//     new Cinderella('name10', '25', '39'),
// ];
// function Prince(name, age, size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let prince = new Prince('princeName', 27, 40);
//     for (let cinderella of CinderellaArr) {
//         if (cinderella.size === prince.size){
//             console.log(cinderella.name);
//         }
//     }
// console.log(CinderellaArr);
// console.log(prince);
// console.log(CinderellaArr.find((cinderella) => cinderella.size === prince.size));