<?php
$conn = new mysqli("host", "user", "pass", "db");
$result = $conn->query("SELECT * FROM usuarios");
$dados = [];
while($row = $result->fetch_assoc()){
$dados[] = $row;
}
echo json_encode($dados); // Retorna os dados como JSON para o JS
?>