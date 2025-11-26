<?php

if ($api == "produtos") {

    // Listagem de produtos
        $pdo = DB::connect();
        if ($method == "GET") {
            if ($acao == "listar" && $param == "") {
                $rs = $pdo->prepare("SELECT * FROM produto");
                $rs->execute();
                $obj = $rs->fetchAll(PDO::FETCH_OBJ);

                if ($obj) {
                    echo json_encode($obj);
                } else {
                    echo json_encode(array("Erro" => "Nenhum produto encontrado"));
                }
            } else if ($acao == "listar" && $param != "") {
                $rs = $pdo->prepare("SELECT * FROM produto WHERE id = :id");
                $rs->execute(array(':id' => $param));
                $obj = $rs->fetch(PDO::FETCH_OBJ);

                if ($obj) {
                    echo json_encode($obj);
                } else {
                    echo json_encode(array("Erro" => "Produto não encontrado"));
                }
            } else {
                echo json_encode(array("Erro" => "Ação não encontrada"));
            }
        }

        if ($method == "POST") {
            if ($acao == "adicionar") {
                $data = json_decode(file_get_contents("php://input"));

                if (isset($data->nome) && isset($data->preco) && isset($data->descricao) && isset($data->imagem) && isset($data->categoria)) {
                    $nome = $data->nome;
                    $preco = $data->preco;
                    $descricao = $data->descricao;
                    $imagem = $data->imagem;
                    $categoria = $data->categoria;
                    

                    $rs = $pdo->prepare("INSERT INTO produto (nome, preco, descricao, imagem, categoria) VALUES (:nome, :preco, :descricao, :imagem, :categoria)");
                    $result = $rs->execute(array(
                        ':nome' => $nome,
                        ':preco' => $preco,
                        ':descricao' => $descricao,
                        ':imagem' => $imagem,
                        ':categoria' => $categoria
                    ));

                    if ($result) {
                        echo json_encode(array("Sucesso" => "Produto adicionado com sucesso"));
                    } else {
                        echo json_encode(array("Erro" => "Falha ao adicionar produto"));
                    }
                } else {
                    echo json_encode(array("Erro" => "Dados incompletos"));
                }
            } else {
                echo json_encode(array("Erro" => "Ação não encontrada"));
            }
        }
        
    }