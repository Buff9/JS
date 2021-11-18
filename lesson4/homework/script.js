// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b){
//     let s = a * b;
//     return s;
// }
// let x = square(+prompt('First value'), +prompt('Second value'));
// console.log(x);


//- створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r){
//     let c = Math.PI * Math.pow(r, 2)
//     return c;
// }
// console.log(circle(+prompt('radius')));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h, r){
//     let s = 2 * Math.PI * r * h;
//     return s;
// }
// console.log(cylinder(+prompt('height'), +prompt('radius')));


//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [12, 'value1', 45, 'value2', 67];
// function arrFunc(a){
//     console.log(a);
// }
// arrFunc(arr);


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function text(a){
//     document.write(`<p>${a}</p>`);
// }
// text(prompt('Your text'));


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(a){
//     document.write(`
//     <ul>
//     <li>${a}</li>
//     <li>${a}</li>
//     <li>${a}</li>
//     </ul>
//     `)
// }
// list('list_text')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list1(a, b){
//     for (let i = 1; i <= b; i++){
//         document.write(`
//         <li>${a}</li>
//         <li>${a}</li>
//         <li>${a}</li>`);
//     }
// }
//
// list1('test_text', 12);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [12, 68, true, !!'value', 'text_value'];
// function arrList(){
//     for (let i = 0; i <= arr.length-1; i++){
//         let a = arr[i];
//         document.write(`<li>${a}</li>`)
//     }
// }
// arrList();


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28}
// ];
//
// function arrBlocks(a, b, c){
//         document.write(`<div>
//         <li>${a}</li>
//         <li>${b}</li>
//         <li>${c}</li>
//         </div><br>`);
// }
// for (let info of arr) {
//     arrBlocks(info.id, info.name, info.age);
// }


