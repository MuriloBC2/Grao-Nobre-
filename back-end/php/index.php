<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");



if (isset($_GET['path'])) {
    $path = explode('/', $_GET['path']);
} else {
    echo "Recurso nao encontrado";
    exit;
}

if (isset($path[0])) { $api = $path[0]; } else { echo "Recurso nao encontrado"; exit; }
if (isset($path[1])) { $acao = $path[1]; } else { $acao = ""; }
if (isset($path[2])) { $param = $path[2]; } else { $param = ""; }

$method = $_SERVER['REQUEST_METHOD'];



include_once("classes/db.class.php");
include_once("api/produtos/produtos.php");
include_once("api/carrinho/carrinho.php");
include_once("api/clientes/clientes.php");


