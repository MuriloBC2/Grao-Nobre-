<?php

//Envio de produtos para o carrinho
if ($api == "carrinho") {
        $pdo = DB::connect();
        if ($method == "POST") {
            if ($acao == "adicionar" && $param == "") {
            
            $data = json_decode(file_get_contents("php://input"));

            if (!isset($data->produto_id) || !isset($data->cliente_id) || !isset($data->quantidade)) {
                echo json_encode(array("Erro" => "Dados incompletos para adicionar ao carrinho"));
                exit;
            }

            
            $sql = "INSERT INTO carrinho (produto_id, cliente_id, quantidade) VALUES (:produto_id, :cliente_id, :quantidade)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':produto_id', $data->produto_id);
            $stmt->bindParam(':cliente_id', $data->cliente_id); 
            $stmt->bindParam(':quantidade', $data->quantidade);
            $stmt->execute();
            
            if ($stmt->rowCount() > 0) {
                echo json_encode(array("Sucesso" => "Produto adicionado ao carrinho"));
            } else {
                echo json_encode(array("Erro" => "Falha ao adicionar produto ao carrinho"));
            }
            }              
        }   

        if($method == "GET") {
            if ($acao == "listar" && $param != "") {
                $rs = $pdo->prepare("SELECT c.id, p.nome, p.preco, c.quantidade, p.imagem FROM carrinho c JOIN produto p ON c.produto_id = p.id WHERE c.cliente_id = :cliente_id");
                $rs->execute(array(':cliente_id' => $param));
                $obj = $rs->fetchAll(PDO::FETCH_OBJ);

                if ($obj) {
                    echo json_encode($obj);
                } else {
                    echo json_encode(array("Erro" => "Nenhum item no carrinho"));
                }
            } else {
                echo json_encode(array("Erro" => "Ação não encontrada"));
            }
        }

        if($method == "DELETE") {
            if ($acao == "remover" && $param != "") {
                $rs = $pdo->prepare("DELETE FROM carrinho WHERE id = :id");
                $rs->bindParam(':id', $param);
                $rs->execute();

                if ($rs->rowCount() > 0) {
                    echo json_encode(array("Sucesso" => "Item removido do carrinho"));
                } else {
                    echo json_encode(array("Erro" => "Falha ao remover item do carrinho"));
                }
            } else {
                echo json_encode(array("Erro" => "Ação não encontrada"));
            }
        }

        if($method == "PUT") {
            if ($acao == "atualizar" && $param != "") {
                $data = json_decode(file_get_contents("php://input"));

                if (!isset($data->quantidade)) {
                    echo json_encode(array("Erro" => "Dados incompletos para atualizar o carrinho"));
                    exit;
                }

                $rs = $pdo->prepare("UPDATE carrinho SET quantidade = :quantidade WHERE id = :id");
                $rs->bindParam(':quantidade', $data->quantidade);
                $rs->bindParam(':id', $param);
                $rs->execute();

                if ($rs->rowCount() > 0) {
                    echo json_encode(array("Sucesso" => "Quantidade atualizada no carrinho"));
                } else {
                    echo json_encode(array("Erro" => "Falha ao atualizar quantidade no carrinho"));
                }
            } else {
                echo json_encode(array("Erro" => "Ação não encontrada"));
            }
        }
    }