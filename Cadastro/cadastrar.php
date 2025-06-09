<?php
$host = "localhost"; // ou 127.0.0.1
$user = "root"; // ou o nome do usuário do seu MySQL
$pass = "4840Senai**"; // sua senha do MySQL
$dbname = "wtask";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Erro: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
$telefone = $_POST['telefone'];
$nivel = "clie";


$sql = "INSERT INTO cadastro (nome, email, senha, telefone, nivel) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $nome, $email, $senha, $telefone, $nivel);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    // Redireciona com cabeçalho HTTP
    header("Location: ../Login/index.html");
    exit();
    
} else {
    echo "Erro ao cadastrar.";
}

$stmt->close();
$conn->close();
?>

