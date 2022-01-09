let wrapper = document.getElementById('wrapper');
let header = document.getElementById('header');

let btnBack = document.createElement('button');
btnBack.innerText = 'Back';

header.appendChild(btnBack);
wrapper.appendChild(header)

btnBack.onclick = () => {
    window.location = '../user-details/index.html'
}
let link = localStorage.getItem('link_id')

            let posts = document.createElement('div')
            wrapper.appendChild(posts)

            fetch(`https://jsonplaceholder.typicode.com/users/${link}/posts`)
                .then((responsePost) => {
                    return responsePost.json();
                })
                .then((data1) => {
                    for (let data1Element of data1) {
                        let postsBlock = document.createElement('div')

                        postsBlock.innerHTML = `
                        <h2>ID: ${data1Element.id}</h2>
                        <h3>Title: ${data1Element.title}</h3>
                        <h3>Body: ${data1Element.body}</h3>
                        <br>`

                        posts.appendChild(postsBlock)

                        let commentsBlockWrapper = document.createElement('div')
                        commentsBlockWrapper.style.display = 'flex';
                        commentsBlockWrapper.style.flexDirection = 'row';
                        commentsBlockWrapper.style.justifyContent = 'space-between';
                        commentsBlockWrapper.style.flexWrap = 'wrap'

                        postsBlock.appendChild(commentsBlockWrapper)

                        fetch(`https://jsonplaceholder.typicode.com/posts/${data1Element.id}/comments`)
                            .then((responseComment) => {
                                return responseComment.json();
                            })
                            .then((data2) => {
                                for (let data2Element of data2) {
                                    let commentsBlock = document.createElement('div')

                                    commentsBlock.innerHTML = `
                                    <h3>Name: ${data2Element.name}</h3>
                                    <h4>Email: ${data2Element.email}</h4>
                                    <h4>Body: ${data2Element.body}</h4>
                                    <br>`

                                    commentsBlock.style.backgroundColor = 'lightgrey';
                                    commentsBlock.style.width = '23%';
                                    commentsBlock.style.marginBottom = '20px';
                                    commentsBlock.style.borderRadius = '5px';
                                    commentsBlock.style.padding = '10px';

                                    commentsBlockWrapper.appendChild(commentsBlock)
                                }
                            }
                        )
                    }
                })