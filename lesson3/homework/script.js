//1.
// let a = [
//     [1, 2, 3, 4, 5],
//     ['string1', 'string2', 'string3', 'string4', 'string5'],
//     ['string1', !!undefined, !!NaN, !!'value', 1]
// ];
// console.log(a);



//2.
// let b = [];
//     b[0] = 1;
//     b[1] = 2;
//     b[2] = 3;
//     b[3] = 4;
//     b[4] = 5;
// console.log(b);



//3.
// for (let i = 0; i <= 10; i++){
//     document.write(`<div>Text</div>`);
// }

//-------------------------------------------

// for (let i = 1; i <= 10; i++){
//     document.write(`<div>${i}. Text</div>`);
// }

//-------------------------------------------

// let i = 0;
// while (i < 20){
//     document.write(`<h2>Text</h2>`);
//     i++;
// }

//-------------------------------------------

// let i = 1;
// while(i <= 20){
//     document.write(`<h1>${i}. Text</h1>`)
//     i++;
// }



//4.
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= a.length - 1; i++){
//     console.log(a[i]);
// }

//-------------------------------------------

// let a = ['string1', 'string2', 'string3', 'string4', 'string5', 'string6', 'string7', 'string8', 'string9', 'string10'];
// for (let i = 0; i <= a.length - 1; i++){
//     console.log(a[i]);
// }

//-------------------------------------------

// let a = [1, 2, 3, 'string1', 'string2', 'string3', !!null, !!'value', !!undefined, true];
// for (let i = 0; i <= a.length -1; i++){
//     console.log(a[i]);
// }

//-------------------------------------------

// let a = [1, 2, 3, 'string1', 'string2', 'string3', !!null, !!'value', !!undefined, true];
// for (let i = 0; i <= a.length -1; i++){
//     if (typeof a[i] === 'boolean'){
//         console.log(a[i]);
//     }
// }

//-------------------------------------------

// let a = [1, 2, 3, 'string1', 'string2', 'string3', !!null, !!'value', !!undefined, true];
// for (let i = 0; i <= a.length -1; i++){
//     if (typeof a[i] === 'number'){
//         console.log(a[i]);
//     }
// }

//-------------------------------------------

// let a = [1, 2, 3, 'string1', 'string2', 'string3', !!null, !!'value', !!undefined, true];
// for (let i = 0; i <= a.length -1; i++){
//     if (typeof a[i] === 'string'){
//         console.log(a[i]);
//     }
// }



//5.
// let a = [];
//     a[0] = 1;
//     a[1] = 2;
//     a[2] = 3;
//     a[4] = 'string1';
//     a[5] = 'string2';
//     a[6] = 'string3';
//     a[7] = !!null;
//     a[8] = !!'value';
//     a[9] = !undefined;
//     a[10] = true;
// console.log(a);

//-------------------------------------------

// for (let i = 1; i <= 10; i++){
//     document.write(`<div>${i}</div>`);
// }

//-------------------------------------------

// for (let i = 1; i <= 100; i++){
//     document.write(`<div>${i}</div>`);
// }

//-------------------------------------------

// for (let i = 1; i <= 100; i+=2){
//     document.write(`<div>${i}</div>`);
// }

//-------------------------------------------

// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0) {
//         document.write(`<div>${i}</div>`);
//     }
//  }

//-------------------------------------------

// for (let i = 1; i <= 100; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }