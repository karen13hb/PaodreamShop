const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
const procesarPedidoBtn = document.getElementById('procesar-pedido');

let articulosCarrito = [];



export class Aux {
	

	agregarProducto(e) {
	    e.preventDefault();
	    // Delegation para agregar-carrito
	    if(e.target.classList.contains('agregar-carrito')) {
	         const producto = e.target.parentElement.parentElement.parentElement.parentElement;
	         this.leerDatosProducto(producto);
	         

	    }
	}

	leerDatosProducto(producto) {
	    const infoProducto = {
	         imagen: producto.querySelector('.imgproduct').src,
	         titulo: producto.querySelector('.title-nombre').textContent,
	         precio: producto.querySelector('.precio').textContent,
	         id: producto.querySelector('a').getAttribute('data-id'), 
	         cantidad: 1
	    }

	    if(articulosCarrito.some( producto => producto.id === infoProducto.id)) { 
	         const productos = articulosCarrito.map( producto => {
	              if( producto.id === infoProducto.id ) {
	                   producto.cantidad++;
	                    return producto;
	               } else {
	                    return producto;
	            }
	         })
	         articulosCarrito = [...productos];
	    }  else {
	         articulosCarrito = [...articulosCarrito, infoProducto];
	    }
	    this.carritoHTML();
	    

	}
	procesarPedido(e){
        e.preventDefault();

        if(this.obtenerProductosLocalStorage().length === 0){
            alert("Ingrese productos al carrito")
        }
        else {
            location.href = "compra.php";
        }
    }
	leerLocalStorageCompra(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px" data-id="${producto.id}"></a>
                </td>
            `;
            listaCompra.appendChild(row);
        });
    }


	eliminarProducto(e) {
	    e.preventDefault();
	    if(e.target.classList.contains('borrar-producto') ) {
			
	         e.target.parentElement.parentElement.remove();
	        const productoId = e.target.getAttribute('data-id');
	         
	         
	         // Eliminar del arreglo del carrito
	        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

	        this.eliminarProductoLocalStorage(productoId);
	        this.carritoHTML();
	        this.calcularTotal();  
	    }
	}

	carritoHTML() {
		this.vaciarCarrito()
	    
	    articulosCarrito.forEach(producto => {
	         const row = document.createElement('tr');
	         
	         row.innerHTML = `

	              <td style="width: 300px" >
	                <img src="${producto.imagen}" style="width: 100%;" >
	              </td>
	              <td>${producto.titulo}</td>
	              <td>${producto.precio}</td>
	              <td>${producto.cantidad} </td>
	              <td>
	                   <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
	              </td>
	         `;
	         contenedorCarrito.appendChild(row);
	         this.guardarProductoLocalStorage(producto);
	         

	    });
	    this.calcularTotal();

	    
	}

	vaciarArray(){
     	this.vaciarCarrito();
      	articulosCarrito = [];
	}

	vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
    
     this.vaciarLocalStorage();
     return false;
	}

	guardarProductoLocalStorage(producto){
	     let productos;
	     console.log(productos);
	     productos =this.obtenerProductosLocalStorage();

	     productos.push(producto);
	     localStorage.setItem("productos", JSON.stringify(productos));

	}

	obtenerProductosLocalStorage(){
     let productosLS;

     if(localStorage.getItem("productos")== null){
          productosLS=[];
     }else{
          productosLS=JSON.parse(localStorage.getItem("productos"));

     }
     return productosLS;
     
     }

	leerLocalStorage() {
	     let productosLS;

	     productosLS =this.obtenerProductosLocalStorage();
	     


	    articulosCarrito =  productosLS;
	     console.log(articulosCarrito)

	     productosLS.forEach(function(producto){
	          const row = document.createElement("tr");

	          row.innerHTML=`
	          <td style="width: 300px" >
	               <img src="${producto.imagen}" style="width: 100%;" >
	          </td>

	     <td>
	     ${producto.titulo}
	     </td>
	     <td>
	     ${producto.precio}
	     </td>
	     <td>${producto.cantidad} </td>
	     <td>
	     <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
	     </td>

	          `;

	          contenedorCarrito.appendChild(row);
	     })
	     this.calcularTotal();
	     
	}

	eliminarProductoLocalStorage(producto){
	     let productosLS;
	     productosLS=this.obtenerProductosLocalStorage();
	     for (var i =0; i< productosLS.length; i++) {
	          if (productosLS[i].id == producto) {
	               productosLS.splice(i, 1);
	          }
	     }

	    

	     localStorage.setItem("productos", JSON.stringify(productosLS));
	}

	vaciarLocalStorage(){
	     localStorage.clear();
	}

	calcularTotal(){
        let productosLS;
        let total = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for(let i = 0; i < productosLS.length; i++){
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;
            
        }
        
          
          
           
        document.getElementById('subtotal').innerHTML = "S/. " + total;
    }

	obtenerEvento(e) {
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {
            producto = e.target.parentElement.parentElement;
            id = producto.querySelector('a').getAttribute('data-id');
            cantidad = producto.querySelector('input').value;
            let actualizarMontos = document.querySelectorAll('#subtotales');
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;                    
                    actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio);
                }    
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));
            
        }
        else {
            console.log("click afuera");
        }
    }


}
const a = new Aux();


// Listeners

cargarEventos();

function cargarEventos(){
 
// Dispara cuando se presiona "Agregar Carrito"
     
     listaProductos.addEventListener('click', (e)=>{a.agregarProducto(e)});

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', (e)=>{a.eliminarProducto(e)});

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', (e)=>{a.vaciarArray(e)});

     document.addEventListener("DOMContentLoaded", a.leerLocalStorage());

	 procesarPedidoBtn.addEventListener('click', (e)=>{a.procesarPedido(e)});

}















