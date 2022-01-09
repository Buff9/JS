let wrapper = document.getElementById('wrapper')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let datum of data) {
            let block = document.createElement('div')
            block.innerHTML = `
                <h2>ID: ${datum.id}</h2>
                <h2>Name: ${datum.name}</h2>`

            block.style.width = '45%';
            wrapper.appendChild(block);

            let btn = document.createElement('button');
            btn.innerText = 'More info';
            block.appendChild(btn);

            btn.onclick = () => {
                let link = JSON.stringify(datum.id)
                localStorage.setItem('link_id', link)
                window.location  = `../user-details/index.html`
            }
        }
    })