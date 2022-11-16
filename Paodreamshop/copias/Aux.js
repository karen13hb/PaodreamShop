class Aux {
	

	agregarProducto(e) {
	    e.preventDefault();
	    // Delegation para agregar-carrito
	    if(e.target.classList.contains('agregar-carrito')) {
	         const producto = e.target.parentElement.parentElement.parentElement.parentElement;
	        
	         console.log(producto);
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
	    console.log(infoProducto);

	}

	eliminarProducto(e) {
	    e.preventDefault();
	    if(e.target.classList.contains('borrar-producto') ) {
	         //e.target.parentElement.parentElement.remove();
	        const productoId = e.target.getAttribute('data-id');
	         
	         
	         // Eliminar del arreglo del carrito
	        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

	        this.eliminarProductoLocalStorage(productoId);
	        this.carritoHTML();  
	    }
	}

	carritoHTML() {
	    this.vaciarCarrito();
	    articulosCarrito.forEach(producto => {
	         const row = document.createElement('tr');
	         row.innerHTML = `
	              <td>  
	                   <img src="${producto.imagen}" width=100>
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
	         console.log(producto);

	    });

	    
	}

	vaciarArray(){
     	this.vaciarCarrito();
      	articulosCarrito = [];
	}

	vaciarCarrito() {
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
     articulosCarrito = [];

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
     console.log(productosLS);
     }

	leerLocalStorage() {
	     let productosLS;

	     productosLS =this.obtenerProductosLocalStorage();

	     productosLS.forEach(function(producto){
	          const row = document.createElement("tr");

	          row.innerHTML=`
	          <td>
	          <img src="${producto.imagen}" width=100>
	          </td>

	     <td>
	     ${producto.titulo}
	     </td>
	     <td>
	     ${producto.precio}
	     </td>
	     <td>
	     <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
	     </td>

	          `;

	          contenedorCarrito.appendChild(row);
	     })
	     
	}

	eliminarProductoLocalStorage(producto){
	     let productosLS;
	     productosLS=this.obtenerProductosLocalStorage();
	     console.log(productosLS);


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
}