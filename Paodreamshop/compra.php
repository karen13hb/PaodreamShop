<?php include("template/cabecera.php"); ?>


<main>
        <div class="container">
            <div class="row mt-3">

                
                <div class="titulo tseparador">
                    <div class="separador"><img src="img/separadorL.svg" alt=""></div>
                        <p>Detalles del Carrito</p>
                    <div class="separador"><img src="img/separadorR.svg" alt=""></div>
                </div>
                    
                    <form id="procesar-pago" action="#" method="post">
                      

                        <div id="carrito-2" class="tabla-listacompra" >
                            <table class="tablec" id="lista-compra" >
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                        <th scope="col"></th>
                                    </tr>

                                </thead>
                                <tbody >

                                </tbody>
                                <tr>
                                    <th colspan="4" scope="col" class="text-right">TOTAL :</th>
                                    <th scope="col">
                                       <p></p>
                                    </th>
                                  
                                </tr>

                            </table>
                        </div>


                        <table class="tablac2" >
                            <tr>
                                <th>
                                <label for="cliente" class="nom-cliente">Cliente :</label>


                                </th>
                                <th>
                                <input type="text" class="form-control" id="cliente"
                                placeholder="Ingresa nombre cliente" name="destinatario">
                                    
                                </th>
                            </tr>
                            <tr>
                                <th>
                                <label for="direccion" class="dir-cliente">Direccion :</label>

                                </th>
                                <th>
                                <input type="text" class="form-control" id="direccion"
                                placeholder="Ingresa direccion cliente" name="destinatario">
                                </th>
                            </tr>
                            <tr>
                                <th>
                                <label for="email" class="mail-cliente">Correo :</label>

                                </th>
                                <th>
                                <input type="text" class="form-control" id="email" placeholder="Ingresa tu correo">
                                </th>
                            </tr>
                        </table>
                        

                        <div class="botones-compra">
                            <div class="boton-index">
                                <a href="index.php" class="boton-u">Seguir comprando</a>
                            </div>
                            <div class="boton-compra">
                              <a href="#" class="boton-u" id="procesar-compra">Realizar compra</a>
                            </div>
                        </div>

                    </form>                


            </div>

        </div>
    </main>



<?php include("template/pie.php"); ?>