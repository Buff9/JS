// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let nameEdit = name => {
//     return name.replace('..',' ').replace('---',' ').replace('__', ' ');
// }
// console.log(nameEdit(n1));
// console.log(nameEdit(n2));
// console.log(nameEdit(n3));

//==================================================================================================

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = [];
// let random = a =>{
//     for(let i = 0; i <= a-1; i++){
//         arr.push(Math.floor(Math.random()*1000))
//     }
// }
// random(10);
// console.log(arr);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(arr.sort());

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function pair (a){
//     return a%2===0
// }
// console.log(arr.filter(pair));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(arr.map(arrItem => arrItem.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// function sortNums(arr, a){
//     if(a === 'ascending'){
//         return arr.sort((a,b) => a - b)
//     }else if (a === 'descending'){
//         return arr.sort((a,b) => b - a);
//     }else{
//         return 'Invalid Value'
//     }
// }
// console.log(sortNums(arr,'ascending')); // [3,11,21]

//==================================================================================================

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// console.log(
//     coursesAndDurationArray.sort(
//         function(a, b) {
//             return b.monthDuration - a.monthDuration;
//         })
// );

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(
//     coursesAndDurationArray.filter(
//         function(a) {
//             return a.monthDuration > 5;
//         })
// );