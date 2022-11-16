<?php include("template/cabecera.php"); ?>
	<main class= "cont-main">

		<div id="slider">
			<figure>
				<img src="img/banner.jpeg" alt="">
				<img src="img/banner-2.jpeg" alt="">
				<img src="img/banner-3.jpeg" alt="">
				<img src="img/banner-4.jpeg" alt="">
				<img src="img/banner-2.jpeg" alt="">
			</figure>
		</div>
		<br><br>


		<div class="contenedor-nuevos">
			<div class="titulo">
				<p>¡RECIEN LLEGADOS!</p>
			</div>
			<!--
				For para las imagenes 
			-->
			<div class="productos">

				<ul class="productoslista">
					<?php 
					include_once "logica/connect.php";

					$query = "SELECT * FROM producto ORDER BY Id DESC LIMIT 6 ";

        			$resultado = $mysqli->query($query);

					for($i=0; $i<$resultado->num_rows; $i++){
						$resultado->data_seek($i);
						$fila = $resultado->fetch_assoc();

					
					?>
				    <li>
				    	<div class="item-cont">
				    		<img src="data:image/jpeg;base64,<?php echo base64_encode($fila['Imagen'])?>" alt="" class="imgproduct">
				    		
				    		<div class="hv-transparente">
					    		<div class="btn-carrito">
					    			<a href="#"  data-id="<?php echo $fila['Id'];?>">
					    				<img  src="img/carrito.png" alt="" class="agregar-carrito ">
					    			</a>
					    		</div>
					    		<div class="info-producto">
					    			<a class="title-nombre" href="#"><?php echo $fila['Nombre']?></a>
					    			<p class="precio" id="p"><?php echo number_format($fila['Precio'], 0, '', '.');?></p>
					    		</div>
				    		</div>
						</div>
				    		
				    </li>
				  <?php }?>
				    
                </ul>
				
			</div>

			
		</div>


		<div class="contenedor-dreams">
			<div class="titulo tseparador">
				<div class="separador"><img src="img/separadorL.svg" alt=""></div>
				<p>Dreams</p>
				<div class="separador"><img src="img/separadorR.svg" alt=""></div>
				
			</div>
			<div class="collage">
				<script src="https://apps.elfsight.com/p/platform.js" defer></script>
                <div class="elfsight-app-76457e76-9b95-4e43-b4f4-c7704f239d83"></div>
			</div>

			
		</div>


		<div class="contenedor-corazon">
			<div class="titulo tseparador">
				<div class="separador"><img src="img/separadorL.svg" alt=""></div>
				<div class="corazon-title"><img src="img/cora.svg" alt=""></div>
				<div class="separador"><img src="img/separadorR.svg" alt=""></div>
				
			</div>
			<br>
			<br>
			<div class="marcas">
				<div class="titulo tmarcas">
					<p>Nuestras Marcas</p>
				</div>

				<div class="supercart">
					<div class="wrapper">
					    <i id="left" class="fa-solid fa-angle-left"></i>
					      <div class="carousel">
						        <img src="img/atenea.png" alt="img" draggable="false">
						        <img src="img/anik.jpg" alt="img" draggable="false">
						        <img src="img/Bioaqua.png" alt="img" draggable="false">
						        <img src="img/rubyrose.png" alt="img" draggable="false">
						        <img src="img/ushas.png" alt="img" draggable="false">
						        <img src="img/lula.png" alt="img" draggable="false">
						        <img src="img/ame.jpg" alt="img" draggable="false">
						        <img src="img/karite.png" alt="img" draggable="false">
						        <img src="img/myk.png" alt="img" draggable="false">
						        <img src="img/feble.png" alt="img" draggable="false">
						       

					      </div>
					    <i id="right" class="fa-solid fa-angle-right"></i>
					</div>
					
				</div>

			
					
				</div>
			</div>


		<div class="logo-1">
			<img src="img/logo.jpg" alt="img" >
		</div>

		<div >
		  <a href="compra.php" class="btn-flotante"><img class="img-flota"  src="img/carrito.png" alt="">
		  </a>
	    </div>
    </main>
	<?php include("template/pie.php"); ?>
    