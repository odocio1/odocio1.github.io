// JavaScript para interações do carrinho de compras

// Variáveis
const produtos = document.querySelectorAll('.produto');
const itensCarrinho = document.querySelector('.itens-carrinho');
const totalCarrinho = document.querySelector('.total-carrinho');
const finalizarCompra = document.querySelector('.finalizar-compra');
    
let carrinho = [];
let total = 0;

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    itensCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome}: R$ ${item.preco.toFixed(2)}`;
        itensCarrinho.appendChild(li);
    });
    totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
}

// Adicionar evento de clique aos botões "Adicionar ao Carrinho"
produtos.forEach(produto => {
    const botao = produto.querySelector('.adicionar-ao-carrinho');
    botao.addEventListener('click', () => {
        const nome = produto.querySelector('h2').textContent;
        const preco = parseFloat(produto.querySelector('p').textContent.slice(3));
        adicionarAoCarrinho(nome, preco);
    });
});

// Adicionar evento de clique ao botão "Finalizar Compra"
finalizarCompra.addEventListener('click', () => {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
});