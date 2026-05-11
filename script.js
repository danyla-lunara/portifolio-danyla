// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    const msgConfirmacao = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede que a página recarregue

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação de preenchimento e formato de email 
        if (nome && email.includes('@') && mensagem) {
            // Simulação de envio [cite: 61]
            msgConfirmacao.textContent = "Mensagem enviada com sucesso, " + nome + "!";
            msgConfirmacao.style.display = 'block';
            
            // Limpa os campos 
            form.reset();

            // Alerta 
            alert("Sucesso!");
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});