<?php

//cadastro de clientes
if ($api == "clientes") {
        $pdo = DB::connect();
        if ($method == "POST") {

            // Cadastro de novos clientes
            if ($acao == "cadastrar" && $param == "") {
            
            $data = json_decode(file_get_contents("php://input"));

           if (!isset($data->nome) || !isset($data->email) || !isset($data->senha) || !isset($data->telefone) || !isset($data->endereco) || !isset($data->cep)) {
                echo json_encode(array("Erro" => "Dados incompletos para cadastro"));
                exit;
            }

            $senhaCriptografia = password_hash($data->senha, PASSWORD_DEFAULT);

            $sql = "INSERT INTO cliente (nome, email, senha, telefone, endereco, cep) VALUES (:nome, :email, :senha, :telefone, :endereco, :cep)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $data->nome);
            $stmt->bindParam(':email', $data->email);
            $stmt->bindParam(':senha', $senhaCriptografia);
            $stmt->bindParam(':telefone', $data->telefone);
            $stmt->bindParam(':endereco', $data->endereco);
            $stmt->bindParam(':cep', $data->cep);
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
                    echo json_encode(array("Sucesso" => "Login bem-sucedido", "cliente" => $obj));
                } else {
                    echo json_encode(array("Erro" => "Email ou senha inválidos"));
                }
            }
        }   
    }