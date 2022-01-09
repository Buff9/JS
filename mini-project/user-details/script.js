let wrapper = document.getElementById('wrapper');

let header = document.getElementById('header');
let btnBack = document.createElement('button');

btnBack.innerText = 'Back';
header.appendChild(btnBack);

btnBack.onclick = () => {
    window.location = '../main/index.html'
}

let link = localStorage.getItem('link_id')

fetch(`https://jsonplaceholder.typicode.com/users/${link}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            let block = document.createElement('div');

            block.innerHTML = `
            <h2>ID: ${data.id}</h2>
            <h3>Name: ${data.name}</h3>
            <h3>Username: ${data.username}</h3>
            <h3>Email: ${data.email}</h3>
            <h3>Address:</h3>
            <h4 style="margin-left: 10%">Street: ${data.address.street}</h4>
            <h4 style="margin-left: 10%">Suite: ${data.address.suite}</h4>
            <h4 style="margin-left: 10%">City: ${data.address.city}</h4>
            <h4 style="margin-left: 10%">Zip-code: ${data.address.zipcode}</h4>
            <h3 style="margin-left: 10%">Geo:</h3>
            <h4 style="margin-left: 20%">Lat: ${data.address.geo.lat}</h4>
            <h4 style="margin-left: 20%">Lng: ${data.address.geo.lng}</h4>
            <h4>Phone: ${data.phone}</h4>
            <h4>Website: ${data.website}</h4>
            <h4>Company:</h4>
            <h4 style="margin-left: 10%">Name: ${data.company.name}</h4>
            <h4 style="margin-left: 10%">Catch Phrase: ${data.company.catchPhrase}</h4>
            <h4 style="margin-left: 10%">BS: ${data.company.bs}</h4>`

            block.style.margin = 'auto';
            block.style.lineHeight = '10px';
            wrapper.appendChild(block);

            let btn = document.createElement('button');
            btn.style.margin = 'auto';
            btn.style.width = '90%';
            btn.innerText = 'Posts';

            wrapper.appendChild(btn);

            btn.onclick = () => {
                let link = JSON.stringify(data.id)
                localStorage.setItem('link_id', link)
                window.location  = `../post-details/index.html`
            }
    })
