<?php
$mysqli = new mysqli("localhost","root","","productos");

if($mysqli->connect_errno){
    echo "Fallo al conectar a :" .$mysqli->connect_errno;
}

?>