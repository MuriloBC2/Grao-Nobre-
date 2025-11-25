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
        
    }