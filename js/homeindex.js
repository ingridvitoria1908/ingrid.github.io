function mudarConteudo(secao) {
    const conteudo = document.getElementById('conteudo');

    if (secao === 'calculadora') {
        conteudo.innerHTML = '<h2>Calculadora</h2><p>Aqui você pode fazer cálculos simples!</p>';
    } else if (secao === 'calculadoraIMC') {
        conteudo.innerHTML = '<h2>Calculadora IMC</h2><p>Calcule seu Índice de Massa Corporal (IMC) aqui!</p>';
    } else if (secao === 'quiz') {
        conteudo.innerHTML = '<h2>Quiz</h2><p>Teste seus conhecimentos com o nosso quiz interativo!</p>';
    } else if (secao === 'jogo') {
        conteudo.innerHTML = '<h2>Jogo</h2><p>Divirta-se jogando um jogo simples aqui!</p>';
    } else if (secao === 'conversores') {
        conteudo.innerHTML = '<h2>Conversores</h2><p>Converta unidades de medida facilmente aqui!</p>';
    } else if (secao === 'portfolio') {
        conteudo.innerHTML = '<h2>Portfólio</h2><p>Veja o meu portfólio de trabalhos e projetos!</p>';
    } else {
        conteudo.innerHTML = '<p>Selecione um item do menu para ver mais informações.</p>';
    }
}