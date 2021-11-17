//1. Створити пустий масив та :
    //a. заповнити його 50 парними числами за допомоги циклу.
    //     let arr = [];
    //     for (let i = 1; i <= 100; i++){
    //         if (i % 2 === 0){
    //             arr.push(i);
    //         }
    //     }
    //     console.log(arr);

    //b. заповнити його 50 непарними числами за допомоги циклу.
    //     let arr1 = [];
    //     for (let i = 1; i <= 100; i++){
    //         if (i % 2 !== 0){
    //             arr1.push(i);
    //         }
    //     }
    //     console.log(arr1);

    //c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    //     let arr2 = [];
    //     for (let i = 1; i <= 20; i++){
    //         arr2.push(Math.floor(Math.random() * 10))
    //     }
    //     console.log(arr2);


    //d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


//2. Вивести за допомогою console.log кожен третій елемент
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0){
//             console.log(i);
//         }
//     }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0){
//             if (i % 2 === 0){
//                 console.log(i);
//             }
//         }
//     }


//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//     let a = [];
//      for (let i = 1; i <= 100; i++){
//          if (i % 3 === 0){
//              if (i % 2 === 0){
//                  a.push(i);
//              }
//          }
//      }
//     console.log(a);


//5. Вивести кожен елемент масиву, сусід справа якого є парним


//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//    let array = [100,250,50,168,120,345,188];
//    console.log((array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6]) / array.length);


//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//     let arr1 = [(Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10)),
//         (Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10)),
//         (Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10))];
//     let arr2 = [];
//     for (let i = 0; i <= arr1.length -1; i++){
//         arr2.push(arr1[i]*5);
//     }
//     console.log(arr1);
//     console.log(arr2);


//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//     let arr1 = [1, 2, 3, 'string1', 'string2', 'string3', !!null, !!'value', !!undefined, true];
//     let arr2 = [];
//     for (let i = 0; i <= arr1.length; i++) {
//         if (typeof arr1[i] === 'number'){
//             arr2.push(arr1[i]);
//         }
//     }
//     console.log(arr1);
//     console.log(arr2);


//- Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив.


// <--Запутався, і без поняття як це зробити.-->
//===============================================================
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'}
//     ];
//
//     let newArray = [];
//     for (let i =0; i <= usersWithId.length; i++){
//         newArray.push(usersWithId[i]);
//         for(let a =0; a <= citiesWithId.length; a++){
//             newArray.push(citiesWithId[a]);
//         }
//     }
//
//     console.log(newArray);
//===============================================================


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//     let array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     for (let i = 0; i <= array.length; i++){
//         if (array[i] % 2 ===0){
//             console.log(array[i]);
//         }
//     }


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//     let array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let array1 =[];
//     for (let number of array) {
//         array1.push(number);
//     }
//     console.log(array1);


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.






