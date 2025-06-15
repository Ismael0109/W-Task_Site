function enviarEmail(){
    
    const nome = document.getElementById("nomeEmpresa").value;
    const cnpj = document.getElementById("cnpjEmpresa").value;
    const tipoEmpresa = document.getElementById("Opcoes").value;
    const outroTipo = document.getElementById("OtrTipo").value;
    const desc = document.getElementById("txtDesc").value;

    const destinatario = "contatowtesk@gmail.com";
    const assunto = encodeURIComponent("Novo formulário de contato e Idealização de site de " + nome);
    let corpo;
    if (tipoEmpresa == "Outro Tipo") {
        corpo = encodeURIComponent("Nome: " + nome + "\nCNPJ: " + cnpj + "\nTipo de Empresa: " + outroTipo +"\n\nDescrição:\n" + desc);
    } else {
        corpo = encodeURIComponent("Nome: " + nome + "\nCNPJ: " + cnpj + "\nTipo de Empresa: " + tipoEmpresa +"\n\nDescrição:\n" + desc);
    }
    

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    
}