//1) Напишіть код, який :
//  a) додає клас з назвою групи, елементу з ід main_header
    document.getElementById('main_header').classList.add('Sep-2021');

//  b) робить шириниу елементу ul 400px
    document.getElementsByTagName('ul')[0].style.width = '400px';

//  c) робить шириниу всіх елементів з класом linkList шириною 50%
    let list = document.getElementsByClassName('linkList');
    for (let listElement of list) {
        listElement.style.width = '50%';
    }

//  d) отримує текст який зберігається в елементі з класом listElement2
     console.log(document.getElementsByClassName('listElement2')[0].innerText);

//  отримує всі елементи li та змінює ім колір фону на сірий
    let liList = document.getElementsByClassName('linkList');
    for (let liListElement of liList) {
        liListElement.style.backgroundColor = 'gray';
    }

//  f) отримує всі елементи 'a' та додає їм клас anchor
    let aList = document.getElementsByTagName('a');
    for (let aListElement of aList) {
        aListElement.classList.add('anchor');
    }

//  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
    let aList1 = document.getElementsByTagName('a');
    for (let aList1Element of aList1) {
        if (aList1Element.innerText === 'link3'){
            aList1Element.style.fontSize = '40px';
        }
    }

//  h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
    let aList2 = document.getElementsByTagName('a');
    for (let aList2Element of aList2) {
        aList2Element.classList.add(aList2Element.innerText)
    }

 // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
    let bgColor = prompt('Background color');
    let subTxt = document.getElementsByClassName('sub-header');
    for (let subTxtElement of subTxt) {
        subTxtElement.style.backgroundColor = bgColor;
    }

//  j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     let txtColor = prompt('Text color');
//     let subColor = document.getElementsByClassName('sub-header');
//         for (let subColorElement of subColor) {
//             if (subColorElement.innerText === 'content 2 segment') {
//                 subColorElement.style.color = txtColor;
//             }
//         }

//  k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
    let newContentTextElement = prompt('text');
    let contentText = document.getElementsByClassName('content_1');
        for (let contentTextElement of contentText) {
            contentTextElement.innerText = newContentTextElement;
        }

//  l) отримати елементи p та змінити їм padding на 20px
    let Plist = document.getElementsByTagName('p');
    for (const plistElement of Plist) {
        plistElement.style.padding = '20px'
    }

//  m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
    let text2Text = document.getElementsByClassName('text2');
    text2Text[0].innerText = 'Sep-2021';