//- Знайти та вивести довижину настипних стрінгових значень
//     let str1 = 'hello world';
//     let str2 = 'lorem ipsum';
//     let str3 = 'javascript is cool';
//     console.log(str1.length, str2.length, str3.length);


//- Перевести до великого регістру наступні стрінгові значення
//     let str1 = 'hello world';
//     let str2 = 'lorem ipsum';
//     let str3 = 'javascript is cool';
//     console.log(
//         str1.toUpperCase(),
//         str2.toUpperCase(),
//         str3.toUpperCase()
//     );


//- Перевести до нижнього регістру настипні стрінгові значення
//     let str1 = 'HELLO WORLD';
//     let str2 = 'LOREM IPSUM';
//     let str3 = 'JAVASCRIPT IS COOL';
//     console.log(
//         str1.toLowerCase(),
//         str2.toLowerCase(),
//         str3.toLowerCase()
//     );


//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//     let str = ' dirty string   ';
//     console.log(str.trim());


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let stringToarray = a => a.split(' ');
//     console.log(stringToarray(str));


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let delete_characters = (str, length) => str.substr(0,length)
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7));


//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     function insert_dash(str) {
//         let a = str.toUpperCase();
//         let b = a.split(' ');
//         let c = b.join('-');
//         return c;
//     }
// let str1 = "HTML JavaScript PHP";
// console.log(insert_dash(str1));


//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
    // let string = str => {
    //     return str[0].toUpperCase().concat(str.slice(1));
    // };
    // console.log(string('test_title'));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// function capitalize(str){
//     let up = str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//     return up;
// }
// let str = 'title title title title';
// console.log(capitalize(str));
