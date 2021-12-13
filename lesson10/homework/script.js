//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, ч Hide me тобы при клике на кнопку исчезал элемент с id="text".
    let hideContent = document.getElementById('text');
    let hideButton = document.getElementById('btn');
    hideButton.onclick = function () {
        hideContent.classList.toggle('hide');
    }

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
    let hideButton1 = document.getElementById('btn1');
    hideButton1.onclick = function () {
        this.classList.toggle('hide1');
    }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
    document.getElementById('age_btn').onclick = function (){
        let age = document.getElementById('age').value
        if(age < 18){
            alert('access denied')
        }else{
            alert('access granted')
        }
    }

//- Создайте меню, которое раскрывается/сворачивается при клике
    let hideMenu = document.getElementById('menu');
    hideMenu.onclick = function () {
        this.classList.toggle('hide2');
    }

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolor sit amet'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
    let arr = [
        {
            title: 'Object1 Title',
            body: 'Object1 Body'
        },
        {
            title: 'Object2 Title',
            body: 'Object2 Body'
        },
        {
            title: 'Object3 Title',
            body: 'Object3 Body'
        },
        {
            title: 'Object4 Title',
            body: 'Object4 Body'
        },
        {
            title: 'Object5 Title',
            body: 'Object6 Body'
        }
    ]
    //debugger
    for (let arrElement of arr) {
        let block = document.createElement('div');

        let title = document.createElement('h2');
        title.innerText = arrElement.title;
        block.appendChild(title);

        let body = document.createElement('p');
        body.innerText = arrElement.body;
        block.appendChild(body);

        let hideButton2 = document.createElement('button');
        hideButton2.innerText = 'Hide Body';
        block.appendChild(hideButton2);

        hideButton2.onclick = function () {
            body.classList.toggle('hide');
        }
        document.body.appendChild(block);
    }