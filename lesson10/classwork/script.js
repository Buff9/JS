//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
    let block1 = document.createElement('div');
    document.body.appendChild(block1);


    let block2 = document.createElement('div');
    document.body.appendChild(block2);
    block2.style.margin = '15px 0';


    let form1 = document.createElement('form');
    form1.setAttribute('name','firstForm');
    form1.style.width = '170px';

    let input11 = document.createElement('input');
    input11.setAttribute('name', 'firstInput');

    let input12 = document.createElement('input');
    input12.setAttribute('name', 'secondInput');

    form1.appendChild(input11);
    form1.appendChild(input12);
    block1.appendChild(form1);

    let button1 = document.createElement('button');
    button1.innerText = 'Button1';
    block1.appendChild(button1);


    let form2 = document.createElement('form');
    form2.setAttribute('name','secondForm');
    form2.style.width = '170px';

    let input21 = document.createElement('input');
    input21.setAttribute('name', 'thirdInput');

    let input22 = document.createElement('input');
    input22.setAttribute('name', 'fourthInput');

    form2.appendChild(input21);
    form2.appendChild(input22);
    block2.appendChild(form2);

    let button2 = document.createElement('button');
    button2.innerText = 'Button2';
    block2.appendChild(button2);


    button1.onclick = function (){
        console.log(input11.value, input12.value);
    }

    button2.onclick = function (){
        console.log(input21.value, input22.value);
    }

//- Сворити масив не цензцрних слів.
    let arr = ['dirty word 1', 'dirty word 2', 'dirty word 3', 'dirty word 4', 'dirty word 5']
// Сворити інпут текстового типу.
    let checkInput = document.createElement('input');
    checkInput.setAttribute('type', 'text');
    document.body.appendChild(checkInput);

    let checkButton = document.createElement('button');
    checkButton.innerText = 'Check';
    document.body.appendChild(checkButton);
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
    checkButton.onclick = function (){
        for (let string of arr) {
            if (checkInput.value === string){
                alert('wrong word!!')
            }
        }
    }


//- Сворити масив не цензцрних слів.
    let arr1 = ['dirty word 1', 'dirty word 2', 'dirty word 3', 'dirty word 4', 'dirty word 5']
// Сворити інпут текстового типу.
    let checkInput1 = document.createElement('input');
    checkInput1.setAttribute('type', 'text');
    document.body.appendChild(checkInput1);

    let checkButton1 = document.createElement('button');
    checkButton1.innerText = 'Check';
    document.body.appendChild(checkButton1);
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
    checkButton1.onclick = function (){
        for (let string of arr1) {
            if (checkInput1.value.includes(string)){
                alert('wrong word!!')
            }
        }
    }


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
    let tableBlock = document.createElement('div');

    tableBlock.style.display = 'flex';
    tableBlock.style.flexDirection = 'column';
    tableBlock.style.width = '250px';
    tableBlock.style.height = '100px';
    tableBlock.style.justifyContent = 'space-between';
    tableBlock.style.marginTop = '15px';

    let firstInput = document.createElement('input');
    firstInput.setAttribute('type', 'number');
    firstInput.setAttribute('placeholder', 'кількість рядків');

    let secondInput = document.createElement('input');
    secondInput.setAttribute('type', 'number');
    secondInput.setAttribute('placeholder', 'кількість ячеєк');

    let thirdInput = document.createElement('input');
    thirdInput.setAttribute('type', 'text');
    thirdInput.setAttribute('placeholder', 'вміст ячеєк');

    let tableButton = document.createElement('button');
    tableButton.innerText = 'generate';

    let table = document.createElement('table')
    table.style.border = '3px solid black';
    table.style.borderCollapse = 'collapse';
    tableBlock.appendChild(table);

    tableBlock.appendChild(firstInput);
    tableBlock.appendChild(secondInput);
    tableBlock.appendChild(thirdInput);
    tableBlock.appendChild(tableButton);
    document.body.appendChild(tableBlock);

    tableButton.onclick = function (){
        for (let i = 0; i < firstInput.value; i++){
            let tr = table.appendChild(document.createElement('tr'));
            for (let i = 0; i < secondInput.value; i++){
                let td = document.createElement('td')
                td.innerText = thirdInput.value;
                td.style.border = '1px solid black'
                tr.appendChild(td)
            }
        }
    }








