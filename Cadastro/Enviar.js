function AbrirLogin(){
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if (nome === "" || email === "" || senha === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        
        alert('Cadastro Realiza!!');
        window.open('../Login/index.html');
    }
    }
    
