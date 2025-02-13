
function validarFormulario() {
   
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const mensagem = document.getElementById('mensagem').value;

   
    if (nome === '' || email === '' || whatsapp === '' || mensagem === '') {
        alert('Todos os campos são obrigatórios. Por favor, preencha todos!');
        return false; 
    }

   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false; 
    }

    
    const whatsappRegex = /^\d+$/;
    if (!whatsappRegex.test(whatsapp)) {
        alert('Por favor, insira um número de WhatsApp válido (apenas números).');
        return false;
    }

    
    exibirInformacoes(nome, email, whatsapp, mensagem);
    return false; 
}


function exibirInformacoes(nome, email, whatsapp, mensagem) {
    const resultadoDiv = document.getElementById('resultado'); 

    
    resultadoDiv.innerHTML = `
        <h3>Informações Recebidas:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
}
