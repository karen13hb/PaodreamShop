<?php
$mysqli = new mysqli("localhost","root","","productos");

if($mysqli->connect_errno){
    echo "Fallo al conectar a :" .$mysqli->connect_errno;
}
//echo $mysqli->host_info . "\n";

//$query = "INSERT INTO producto(Nombre,Precio,Cantidad,Imagen) VALUES ('Tinta de labios',4500,6,'')";
//$mysqli->query($query);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <table>
            <thead>
                <tr>
                    <td>
                        Nombre
                    </td>
                    <td>
                        Precio
                    </td>
                    <td>
                        Imagen
                    </td>
                </tr>
            </thead>
            <tbody>
        <?php 
        $query = "SELECT * FROM producto";

        $resultado = $mysqli->query($query);
        
        for($i=0; $i<$resultado->num_rows; $i++){
            $resultado->data_seek($i);
            $fila = $resultado->fetch_assoc();?>
            <tr>
                <td>
                    <?php echo $fila['Nombre'];?>
                </td>
                
                <td>
                <?php echo $fila['Precio'];?> 
                </td>
                <td>
                <img src="data:image/jpeg;base64,<?php echo base64_encode($fila['Imagen'])?>">
                </td>
            </tr>
           <?php 
        }
        ?>
        </tbody>
        </table>

    </div>
</body>
</html>