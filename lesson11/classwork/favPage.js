let fav = JSON.parse(localStorage.getItem('fav'));
let mainBlock = document.getElementById('main_body');

for (let user of fav) {
    let favBlock = document.createElement('div');
    favBlock.style.width = '33%';
    favBlock.style.display = 'flex';
    favBlock.style.flexDirection = 'column';
    favBlock.style.alignItems = 'center';
    favBlock.innerHTML = `Name: ${user.name} <hr> Age: ${user.age} <hr> Status: ${user.status} <hr>`;
    mainBlock.appendChild(favBlock)
}
document.body.appendChild(mainBlock);