<?php
class DB {

    public static function connect() {
        $host = "localhost";
        $usuario = "root";
        $banco = "grao_nobre";
        $senha = "";

        return new Pdo("mysql:host=$host;dbname=$banco", $usuario, $senha);
    }
}