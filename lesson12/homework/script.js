//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
    fetch('https://jsonplaceholder.typicode.com/posts\n')
        .then((response) => {
        return response.json();
    })
        .then((data) => {
            for (let datum of data) {
                let firstBlock = document.getElementById('first_block');
                let dataBlock = document.createElement('div');
                dataBlock.classList.add('post');
                dataBlock.style.width = '18%';
                dataBlock.style.overflow = 'hidden';
                dataBlock.innerHTML = `<div><h2>User ID: ${datum.userId}</h2></div> <div><h3>ID: ${datum.id}</h3></div>
                <div><p><b>Title: ${datum.title}</b></p></div> <div><p>Body: ${datum.body}</p></div>`;
                firstBlock.appendChild(dataBlock);
            }
        });

//2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
    fetch ('https://jsonplaceholder.typicode.com/comments')
    .then ((response) =>{
        return response.json();
    })
    .then((comment) => {
        for (let commentElement of comment) {
            let secondBlock = document.getElementById('second_block');
            let commentBlock = document.createElement('div');
            commentBlock.classList.add('comment');
            commentBlock.style.width = '18%';
            commentBlock.style.overflow = 'hidden';
            commentBlock.innerHTML = `<div><h2>Post ID: ${commentElement.postId}</h2></div> <div><h3>ID: ${commentElement.id}</h3></div> 
            <div><p><b>Name: ${commentElement.name}</b></p></div> <div><p><b>E-mail: ${commentElement.email}</b></p></div> <div><p>${commentElement.body}</p></div>`;
            secondBlock.appendChild(commentBlock);
            console.log(commentElement);
        }
    });