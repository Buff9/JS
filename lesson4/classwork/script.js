//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     }else if(b < a && b < c){
//         console.log(b);
//     }else if(c < b && c < a){
//         console.log(c);
//     }
// }
//
// min(6163, 1, 9242);
//
//
//
//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(x, y, z){
//     if (x > y && x > z){
//         console.log(x);
//     }else if(y > x && y > z){
//         console.log(y);
//     }else if(z > x && z > y){
//         console.log(z);
//     }
// }
// max(123, 43, 547)



//- створити функцію яка повертає найбільше число з масиву
// Підглянув в resolve.Сам би ніколи не догадався.
//
// let arr = [123, 436, 34, 254, 473, 17, 284, 58];
// function arrMax(x) {
//     let max = x[0];
//     for (let element of x) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
//
// console.log(arrMax(arr));



//- створити функцію яка повертає найменьше число з масиву
// let arr = [123, 436, 34, 254, 473, 17, 284, 58];
// function arrMax(x) {
//     let min = x[0];
//     for (let element of x) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
//
// console.log(arrMax(arr));



//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// // debugger;
// let arr = [671, 25, 32];
// let x=0;
// let y=0;
// let z=0;
// function sum(a, b, c) {
//     console.log(a + b + c);
// }
//         for (let i = 0; i < 1; i++) {
//            x = arr[i];
//         }
//         for (let i = 1; i < 2; i++) {
//
//             y = arr[i];
//         }
//         for (let i = 2; i < 3; i++) {
//             z = arr[i];
//         }
//         sum(x, y, z);



//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [8, 16, 24];
// let x=0;
// let y=0;
// let z=0;
// function sum(a, b, c) {
//     console.log((a + b + c) / arr.length);
// }
// for (let i = 0; i < 1; i++) {
//     x = arr[i];
// }
// for (let i = 1; i < 2; i++) {
//
//     y = arr[i];
// }
// for (let i = 2; i < 3; i++) {
//     z = arr[i];
// }
// sum(x, y, z);



//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// debugger;
// let arr = [12, 24, 545, 67, 12, 54];
// function arrMaxMin (x){
//     let j = x[0];
//     let a = x[0];
//     for (let number of x) {
//         if (number > j){
//             j = number;
//         }else
//         if(number < a){
//             a = number;
//         }
//     }
//     console.log(a);
//     return j;
// }
// console.log(arrMaxMin(arr));



//- створити функцію яка заповнює масив рандомними числами
// let arr = [];
// function random(a){
//     for (let i =0; i <= a; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
// }
// console.log(arr);
// random(112);



//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
// function random(a){
//     for (let i =0; i <= a; i++){
//         arr.push(Math.floor(Math.random()*a));
//     }
// }
// console.log(arr);
// random(112);


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let revArr = [];
// function arrReverse(){
//         let arguments = arr.reverse();
//     for (let number of arguments) {
//         revArr.push(number);
//     }
// }
// arrReverse(arr);
// console.log(revArr);













