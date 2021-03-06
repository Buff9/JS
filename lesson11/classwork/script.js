//є масив -
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
    let arr = [];
    localStorage.setItem('fav', JSON.stringify(arr));

    let mainBlock = document.getElementById('main_body');
        for (let user of users) {
            let userBlock = document.createElement('div');
            userBlock.style.width = '33%';
            userBlock.style.display = 'flex';
            userBlock.style.flexDirection = 'column';
            userBlock.style.alignItems = 'center';
            userBlock.innerHTML = `Name: ${user.name} <hr> Age: ${user.age} <hr> Status: ${user.status} <hr>`;
            let blockButton = document.createElement('button');
            blockButton.innerText = 'Add to favorites';
            userBlock.appendChild(blockButton);

            blockButton.onclick = () => {
                let fav = JSON.parse(localStorage.getItem('fav'));
                fav.push(user);
                localStorage.setItem('fav', JSON.stringify(fav));
            }
            mainBlock.appendChild(userBlock);

        }
