<?php

$host = "localhost";
$usuario = "root";
$banco = "grao_nobre";
$senha = "";

$pdo = new Pdo("mysql:host=$host;dbname=$banco", $usuario, $senha);

echo "Conectado";

$sqlInsert = "INSERT INTO produto (id, nome, preco, estoque) VALUES (:id, :nome, :preco, :estoque)";
$stmt = $pdo->prepare($sqlInsert);

$stmt -> execute([
    ':id' => 3,
    ':nome' => 'pao de quejo',
    ':preco' => 5,
    ':estoque' => 5
]);

echo "produto inserido";