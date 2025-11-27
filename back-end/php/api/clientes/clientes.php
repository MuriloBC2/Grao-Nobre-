<?php

require 'vendor/autoload.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

//cadastro de clientes
if ($api == "clientes") {
        $pdo = DB::connect();
        if ($method == "POST") {

            // Cadastro de novos clientes
            if ($acao == "cadastrar" && $param == "") {
            
            $data = json_decode(file_get_contents("php://input"));

           if (!isset($data->nome) || !isset($data->email) || !isset($data->senha) || !isset($data->telefone)) {
                echo json_encode(array("Erro" => "Dados incompletos para cadastro"));
                exit;
            }

            $senhaCriptografia = password_hash($data->senha, PASSWORD_DEFAULT);

            $sql = "INSERT INTO cliente (nome, email, senha, telefone) VALUES (:nome, :email, :senha, :telefone)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $data->nome);
            $stmt->bindParam(':email', $data->email);
            $stmt->bindParam(':senha', $senhaCriptografia);
            $stmt->bindParam(':telefone', $data->telefone);
            $stmt->execute();
            
            if ($stmt->rowCount() > 0) {
                echo json_encode(array("Sucesso" => "Usuário cadastrado com sucesso"));
            } else {
                echo json_encode(array("Erro" => "Falha ao cadastrar usuário"));
            }
            }  
            
            //Login de clientes

            if ($acao == "login" && $param == "") {
                $data = json_decode(file_get_contents("php://input"));

                if (!isset($data->email) || !isset($data->senha)) {
                    echo json_encode(array("Erro" => "Dados incompletos para login"));
                    exit;
                }

                $rs = $pdo->prepare("SELECT * FROM cliente WHERE email = :email");
                $rs->bindParam(':email', $data->email);
                $rs->execute();
                $obj = $rs->fetch(PDO::FETCH_OBJ);

                if ($obj && password_verify($data->senha, $obj->senha)) {

                    $payload = [
                        'id' => $obj->id,
                        'email' => $obj->email,
                        'nome' => $obj->nome,
                        'telefone' => $obj->telefone,
                        'iat' => time(),
                        'exp' => time() + (60 * 60 * 24)
                    ];

                    $chave = "ablablablablablablabla";
                    $jwt = JWT::encode($payload, $chave, 'HS256');

                    echo json_encode([
                        "sucesso" => "Login bem-sucedido",
                        "token" => $jwt,
                        "cliente" => $obj

                    ]);

                } else {
                    echo json_encode(array("Erro" => "Email ou senha inválidos"));
                }
            }
        }   
    }