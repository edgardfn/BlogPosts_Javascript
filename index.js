const inputTitulo = document.getElementById("titulo-post")

const inputAutor = document.getElementById("autor-post")

const textAreaConteudo = document.getElementById("conteudo-post")

const inputImagem = document.getElementById("imagem-post")


// const containerPosts = document.getElementById("container-de-posts")
let arrayBlog = []
let contador = 0
let posts = JSON.parse(localStorage.getItem('posts')) || []

const salvarValores = () => {
    const objetoBlog = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        conteudo: textAreaConteudo.value,
        imagem: inputImagem.value
    }

    arrayBlog.push(objetoBlog)
    
    //Local Storage: 
    posts.push(objetoBlog)
    localStorage.setItem('posts', JSON.stringify(posts))

    limparCampos( inputTitulo , inputAutor , inputImagem, textAreaConteudo );
    
    window.location.href = "posts.html"

    

}


const limparCampos = (titulo, autor, imagem, conteudo) => {
    titulo.value = ""
    autor.value = ""
    imagem.value = ""
    conteudo.value = ""
}


