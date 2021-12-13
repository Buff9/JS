// Все робити за допомоги js.
// - створити блок,
    let block = document.createElement('div');
    let p = document.createElement('p')
    p.innerText = 'sends';

//- додати йому класи wrap, collapse, alpha, beta
    block.classList.add ('wrap');
    block.classList.add ('collapse');
    block.classList.add ('alpha');
    block.classList.add ('beta');

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    block.style.backgroundColor = 'green';
    block.style.color = 'dark red';
    block.style.fontSize = '24px';

//- додати цей блок в body.
    let bodyBlock = document.body.appendChild(block);

//- клонувати його повністю, та додати клон в body.
    let clone = bodyBlock.cloneNode(true);
    document.body.appendChild(clone);

//- Є масив:
    let arr = ['Main', 'Products', 'About us', 'Contacts'];

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
    let ul = document.getElementsByClassName('menu')[0];
    for (let string of arr) {
        let li = document.createElement('li');
        li.innerText = string;
        ul.appendChild(li)
    }

// - Є масив
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
    for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
        let block1 = document.createElement('div');
        block1.innerText = `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;
        document.body.appendChild(block1);
        block1.style.backgroundColor = 'green';
        block1.style.margin = '5px 0';
    }

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
    for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
        let block1 = document.createElement('div');
        block1.classList.add('item');

        let h1 = document.createElement('h1')
        h1.classList.add('heading')
        h1.innerText = coursesAndDurationArrayElement.title;
        block1.appendChild(h1);

        let p = document.createElement('p');
        p.innerText = coursesAndDurationArrayElement.monthDuration;

        block1.appendChild(h1);
        block1.appendChild(p);

        document.body.appendChild(block1);
        block1.style.backgroundColor = 'green';
        block1.style.margin = '5px 0';
    }
