<?php
session_start(); // Inicia a sessão

// Conexão com o banco
$conn = new mysqli("localhost", "root", "4840Senai*", "wtask");

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Pega os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Consulta o banco
$sql = "SELECT * FROM cadastro WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $usuario = $resultado->fetch_assoc();

    if (password_verify($senha, $usuario['senha'])) {
        // Se quiser, pode usar hash em vez de texto puro
        // Login bem-sucedido
        $_SESSION['usuario'] = $usuario['nome']; // Exemplo: salvar nome na sessão
        header("Location: ../Inicio/index.html");
        exit();
    } else {
        echo "<script>alert('Senha incorreta!'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('Usuário Não Encontrado!'); window.history.back();</script>";
}

$conn->close();
?>
