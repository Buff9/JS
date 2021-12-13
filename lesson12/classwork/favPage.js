let favBlock = document.getElementById('main_block');
favBlock.classList.toggle('view')
favBlock.style.width = '90%';
favBlock.style.display = 'flex';
favBlock.style.flexDirection = 'row';
favBlock.style.flexWrap = 'wrap';


let backButtonBlock = document.getElementById('header')
let backButton = document.createElement('button');
backButton.innerText = 'Back';
backButton.style.marginRight = '5%';
backButton.style.height = '80%';
backButton.onclick = () => {
    window.location = 'index.html';
}
backButtonBlock.appendChild(backButton)

let fav = JSON.parse(localStorage.getItem('fav'));
for (let user of fav) {
    let favBlockChild = document.createElement('div');
    favBlockChild.style.width = '18%';
    favBlockChild.style.overflow = 'hidden';
    favBlockChild.innerHTML = `<div><h2>User ID: ${user.userId}</h2></div> <div><h3>ID: ${user.id}</h3></div>
                    <div><p><b>Title: ${user.title}</b></p></div> <div><p>Body: ${user.body}</p></div>`;
    favBlock.appendChild(favBlockChild);
}

localStorage.clear();
