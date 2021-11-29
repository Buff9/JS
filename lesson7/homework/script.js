//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [
    new User(1,'Adam', 'Anderson', 'Adam.anderson@gmail.com', '+18143511233'),
    new User(2,'Alex', 'Ashwoon', 'Alex.ashwoon@gmail.com', '+18143568223'),
    new User(3,'Aaron', 'Aikin', 'Aaron.Aikin@gmail.com', '+14124511237'),
    new User(4,'Ben', 'Bateman', 'Ben.Bateman@gmail.com', '+181433511259'),
    new User(5,'Carl', 'Bongard', 'Carl.Bongard@gmail.com', '+14143171213'),
    new User(6,'Dan', 'Bowers', 'Dan.Bowers@gmail.com', '+15143411209'),
    new User(7,'David', 'Boyd', 'David.Boyd@gmail.com', '+15146311260'),
    new User(8,'Edward', 'Cannon', 'Edward.Cannon@gmail.com', '+18143511290'),
    new User(9,'Fred', 'Cast', 'Fred.Cast@gmail.com', '+14143511255'),
    new User(10,'Frank', 'Deitz', 'Frank.Deitz@gmail.com', '+18143511200')
]

console.log(arr);


//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// debugger
function Pair(User){
     if (User.id % 2 === 0){
         return User
     }
}
console.log(arr.filter(Pair));


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function Grow(a, b){
    let sort = a.id - b.id
    return sort
}
console.log(arr.sort(Grow));


//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clientArr = [
    new Client(1,'Adam', 'Anderson', 'Adam.anderson@gmail.com', '+18143511233', ['Coffee', 'tea', 'sugar']),
    new Client(2,'Alex', 'Ashwoon', 'Alex.ashwoon@gmail.com', '+18143568223', ['Fast food', 'Pet food']),
    new Client(3,'Aaron', 'Aikin', 'Aaron.Aikin@gmail.com', '+14124511237', ['Flowers']),
    new Client(4,'Ben', 'Bateman', 'Ben.Bateman@gmail.com', '+181433511259', ['Toothpaste', 'soap', 'shampoo', 'dish-washing powder']),
    new Client(5,'Carl', 'Bongard', 'Carl.Bongard@gmail.com', '+14143171213', ['Cigarettes', 'Alcohol']),
    new Client(6,'Dan', 'Bowers', 'Dan.Bowers@gmail.com', '+15143411209', ['Newspapers ', 'candy ', 'snack']),
    new Client(7,'David', 'Boyd', 'David.Boyd@gmail.com', '+15146311260', ['Bread', 'milk', 'breakfast cereals']),
    new Client(8,'Edward', 'Cannon', 'Edward.Cannon@gmail.com', '+18143511290', ['vegetables']),
    new Client(9,'Fred', 'Cast', 'Fred.Cast@gmail.com', '+14143511255', ['vitamins', 'pain reliever']),
    new Client(10,'Frank', 'Deitz', 'Frank.Deitz@gmail.com', '+18143511200', ['Alcohol', 'coffee', 'Cereals', 'sugar', 'Magazine'])
]
console.log(clientArr);


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
function orderLength(a, b){
    let sort = b.order.length - a.order.length
    return sort
}
console.log(clientArr.sort(orderLength));