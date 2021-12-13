//-- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').innerText);

//    -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').innerText);

//    -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'some changed text';

//    -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'some changed text';

//    -- змініть кожному елементу колір фону на червоний
// document.body.style.backgroundColor = "#c71717";

//     -- змініть кожному елементу колір тексту на синій
document.body.style.color = '#1f3079';

//    -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

//    -- поміняти колір тексту у всіх елементів fc_rules на червоний
document.getElementsByTagName('ul')[0].style.color = "#c71717"; //Cannot set properties of undefined???







