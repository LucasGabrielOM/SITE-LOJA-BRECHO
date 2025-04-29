function adicionarAoCarrinho(nome, preco, imagem) {
    console.log('Botão "Adicionar ao Carrinho" clicado!');
    const produto = {
        nome: nome, // Nome do produto
        preco: `R$ ${preco}`, // Preço formatado
        imagem: imagem // Caminho da imagem
    };

    // Recupera o carrinho do localStorage ou inicializa um array vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o produto ao carrinho
    carrinho.push(produto);

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Feedback para o usuário
    alert('Produto adicionado ao carrinho!');

    // Atualiza o contador de itens no carrinho
    const carrinhoContador = document.getElementById('carrinho-contador');
    if (carrinhoContador) {
        carrinhoContador.textContent = carrinho.length;
    }
}