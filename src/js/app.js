const produtos = [
    { 
        nome: "Entre o Amor e o Tempo", 
        preco: 42.90, 
        categoria: "Romance", 
        disponibilidade: true 
    },
    { 
        nome: "A Última Fortaleza", 
        preco: 56.00, 
        categoria: "Romance",
        disponibilidade: true 
    },
    { 
        nome: "Cosmos", 
        preco: 69.90, 
        categoria: "Suspense", 
        disponibilidade: true 
    },
    { 
        nome: "Sobre a escrita", 
        preco: 49.50, 
        categoria: "Biografia", 
        disponibilidade: false 
    },
    { 
        nome: "Entendendo Algoritmos", 
        preco: 59.00, 
        categoria: "Tecnologia", 
        disponibilidade: true 
    },
    { 
        nome: "A última testemunha", 
        preco: 38.70, 
        categoria: "Suspense", 
        disponibilidade: true 
    },
    { 
        nome: "Programação para Iniciantes", 
        preco: 89.90, 
        categoria: "Tecnologia", 
        disponibilidade: true 
    },
    { 
        nome: "Ilha do Tesouro", 
        preco: 32.00, 
        categoria: "Aventura", 
        disponibilidade: false 
    },
    { 
        nome: "Aventuras no Ártico", 
        preco: 44.90, 
        categoria: "Aventura", 
        disponibilidade: true 
    },
    { 
        nome: "Mistério na Casa 32", 
        preco: 36.50, 
        categoria: "Suspense", 
        disponibilidade: true 
    },
    { 
        nome: "Lógica de Programação", 
        preco: 56.50, 
        categoria: "Tecnologia", 
        disponibilidade: false 
    },
    { 
        nome: "Feliz Ano Velho", 
        preco: 74.50, 
        categoria: "Biografia", 
        disponibilidade: false 
    },
]

const botaoFiltrar = document.getElementById("btn-filtrar")
const botaoTodos = document.getElementById("btn-todos")
const preco = document.getElementById('preco')
const categoria = document.getElementById('categoria')
const produtosContainer = document.getElementById("produtos-container")
const tituloCategoria = document.getElementById('titulo-categoria')

function mostrarProdutos(produtos){
    produtosContainer.innerHTML = ""
    produtos.forEach(produto => {
        produtosContainer.innerHTML +=  `
            <div class="produto">
                <img src="./src/assets/img/livro.png" alt="livro">
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.preco.toFixed(2)}</p>
                <p>Categoria:${produto.categoria}</p>
                <p>Disponibilidade: ${produto.disponibilidade ? "Em estoque" : "Indisponível"}</p>
            </div>
        
        `
   })
   const produto = document.querySelectorAll('.produto')
   produto.forEach(prod =>{
    prod.addEventListener('mouseover', function(){
        prod.style.border = '1px solid #ca8ca4';
    })
    prod.addEventListener('mouseout', function(){
        prod.style.border = 'none';
    })
   })
}


botaoFiltrar.addEventListener('click', function(){
    const categoriaSelecionada = categoria.value
    const disponibilidade = document.querySelector('#disponibilidade').checked
    const precoSelecionado = preco.value

    let filtrados = [...produtos];

    if (categoriaSelecionada) {
        filtrados = filtrados.filter(p => p.categoria === categoriaSelecionada);
        tituloCategoria.innerHTML = `${categoriaSelecionada.toUpperCase()}`
    }else{
        tituloCategoria.innerHTML = ""
    }

    if (disponibilidade) {
        filtrados = filtrados.filter(p => p.disponibilidade);
    }

    if(precoSelecionado == "maior") {
        filtrados = filtrados.sort((a,b) => b.preco - a.preco)
    }else if(precoSelecionado == "menor"){
        filtrados = filtrados.sort((a,b) => a.preco - b.preco)
    }

    mostrarProdutos(filtrados)


})

botaoTodos.addEventListener('click', function(){
    categoria.value = "";
    preco.value = "";
    document.querySelector('#disponibilidade').checked = false;
    tituloCategoria.innerHTML = ""
    mostrarProdutos(produtos)
}
)

mostrarProdutos(produtos)