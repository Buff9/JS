// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function check (a, b){
//     if (arguments.length === 1){
//         console.log(a);
//     }else{
//         console.log(a+b);
//     }
// }
// check(23);



//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// debugger;
// let arr1 = [8, 7, 45];
// let arr2 = [12, 9, 44];
// let arr3 = [];
// let j;
// let l;
//
// function arrSum(a, b){
//     for(let i = 0; i <= a.length-1; i++){
//         for (let aElement of a){  // після break починається заново
//             j=aElement;
//             break;
//         }
//         for (let bElement of b){  // після break починається заново
//             l=bElement;
//             break;
//         }
//         arr3.push(j + l);
//     }
// }
// arrSum(arr1, arr2);
// console.log(arr3);



//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// debugger;
// let arr =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function key(a) {
//     for (const aElement of a) {
//         console.log(Object.keys(aElement));
//     }
// }
//
// key(arr);



//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// debugger;
// let arr =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function key(a) {
//     for (const aElement of a) {
//         console.log(Object.values(aElement));
//     }
// }
//
// key(arr);