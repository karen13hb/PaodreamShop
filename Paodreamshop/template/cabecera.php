<!DOCTYPE html>
<html>
<head>
	<title>PaodreamShop</title>
	<link rel="stylesheet" type="text/css" href="estilos/styles.css">		
	<link rel="stylesheet" type="text/css" href="estilos/slider.css">	
    <link rel="stylesheet" type="text/css" href="estilos/compra.css">	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">	
	<meta charset="utf-8">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Dangrek&display=swap" rel="stylesheet">
</head>
<body>
	<div class="contenedor-principal">
	<header class="cont-head">
		<div class="aviso">
		 <p>Envio gratis por compras superiores a $100.000</p>
		</div>
		
		<div class="menu">
			<img class="menuimg" src="img/user.png" alt="">
			<img class="menuimg" src="img/lupa.png" alt="">
			<div class="submenu">
				<img class="menuimg" src="img/carrito.png" alt="">
				<div id="carrito">
					
                        <table id="lista-carrito" class="u-full-width">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
									<th>Cantidad</th>
									<th></th>            
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>                                                                        
                        
                        <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                        <a href="#" id="procesar-pedido" class="button u-full-width">Procesar Compra</a>
                        <p id="subtotal"></p>
                </div>
			</div>
			
		</div>

		<div class="menu-principal">

			<a href="#">INICIO</a>
			<a href="#">PRODUCTOS</a>
			<a href="#">DREAM SHOP</a>
			<a href="#">DREAMS</a>
			<a href="#">CONTACTO</a>
		</div>
			
	</header>