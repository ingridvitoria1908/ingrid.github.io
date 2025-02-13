
function exibirMensagemBoasVindas() {
    const header = document.querySelector('header');
    const boasVindas = document.createElement('p');
    boasVindas.textContent = 'Bem-vindo ao meu portfólio! Fico feliz que esteja aqui.';
    boasVindas.style.fontStyle = 'italic';
    boasVindas.style.fontSize = '18px';
    boasVindas.style.color = '#333';
    header.appendChild(boasVindas);
}


function exibirDataAtual() {
    const data = new Date();
    const dataAtual = document.getElementById('data-atual');
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    dataAtual.textContent = `Data atual: ${data.toLocaleDateString('pt-BR', opcoes)}`;
}


window.onload = function() {
    exibirMensagemBoasVindas();
    exibirDataAtual();
};
