//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function  Cars(model, maker, year, speed, engine){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.speed = speed;
    this.engine = engine;
    //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    }
    this.info = function (){
        for (let car of Cars) {
            console.log();
        }
    }
}

console.log(new Cars('dsgsdgs', 'srhgsr', 'srhgsr', 'srhgsr', 'srhgsr'));