document.addEventListener('DOMContentLoaded', function () {
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const produtos = document.querySelectorAll('.produto');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove a classe 'ativo' de todos os botões
            filtroBtns.forEach(b => b.classList.remove('ativo'));
            // Adiciona a classe 'ativo' ao botão clicado
            this.classList.add('ativo');

            // Filtra os produtos
            const categoria = this.getAttribute('data-categoria');
            produtos.forEach(produto => {
                if (categoria === 'todos' || produto.getAttribute('data-categoria') === categoria) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        });
    });
});
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert('Produto adicionado ao carrinho!');

    const carrinhoContador = document.getElementById('carrinho-contador');
    if (carrinhoContador) {
        carrinhoContador.textContent = carrinho.length;
    }
}


