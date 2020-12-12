let array = JSON.parse(localStorage.getItem("posts"))
exibirPosts(array)

function exibirPosts( arrayDePosts) {

        let index = 0
        for(let item of arrayDePosts) {
                
                let containerPosts = document.getElementById("container-de-posts")

                containerPosts.innerHTML += `<div class="item-post"></div>`
                
                     
        }

        let divPost = document.getElementsByClassName("item-post")
        for(let post of divPost) {
                        
                post.innerHTML += `<h3>${arrayDePosts[index].titulo}</h3>`
                post.innerHTML += `<h5>${arrayDePosts[index].autor}</h5>`
                post.innerHTML += `<img src="${arrayDePosts[index].imagem}"></img>`
                post.innerHTML += `<p>${arrayDePosts[index].conteudo}</p>`

                index++
        }

    
}