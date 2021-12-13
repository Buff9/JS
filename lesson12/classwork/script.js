//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

    let arr = [];

    localStorage.setItem('fav', JSON.stringify(arr));

    let favButtonBlock = document.getElementById('header')
    let favButton = document.createElement('button');
    favButton.innerText = 'Favorites';
    favButton.style.marginRight = '5%';
    favButton.style.height = '80%';
    favButton.onclick = () => {
        window.location = 'fav.html';
    }
    favButtonBlock.appendChild(favButton)


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((post) => {
            for (let postElements of post) {
                let mainBlock = document.getElementById('main_block');
                let postBlock = document.createElement('div');
                postBlock.classList.add('post');
                postBlock.style.width = '18%';
                postBlock.style.overflow = 'hidden';
                postBlock.innerHTML = `<div><h2>User ID: ${postElements.userId}</h2></div> <div><h3>ID: ${postElements.id}</h3></div>
                    <div><p><b>Title: ${postElements.title}</b></p></div> <div><p>Body: ${postElements.body}</p></div>`;
                let mainButton = document.createElement('button')
                mainButton.innerText = 'Click';
                mainButton.onclick = () => {
                    let fav = JSON.parse(localStorage.getItem('fav'));
                    fav.push(postElements);
                    localStorage.setItem('fav', JSON.stringify(fav));
                }
                postBlock.appendChild(mainButton);
                mainBlock.appendChild(postBlock);
            }
        })