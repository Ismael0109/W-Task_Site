function alterarSobreNos(){
    document.getElementById("sobreNos").style.color = "#dacbb7";
    document.getElementById("contatos").style.color = "#ffffff";
    document.getElementById("clientes").style.color = "#ffffff";
}

function alterarContatos(){
    document.getElementById("sobreNos").style.color = "#ffffff";
    document.getElementById("contatos").style.color = "#dacbb7";
    document.getElementById("clientes").style.color = "#ffffff";
}

function alterarClientes(){
    document.getElementById("sobreNos").style.color = "#ffffff";
    document.getElementById("contatos").style.color = "#ffffff";
    document.getElementById("clientes").style.color = "#dacbb7";
}
 // Abre o modal ao clicar no ícone de login
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'flex';
});

// Fecha o modal ao clicar no "X"
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById('login-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Simula logout (adicione sua lógica real aqui)
document.getElementById('logout-btn').addEventListener('click', function() {
    alert('Logout realizado!');
    document.getElementById('login-modal').style.display = 'none';
});