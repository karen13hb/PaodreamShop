// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarArray);

     document.addEventListener("DOMContentLoaded", leerLocalStorage);

}


// Funciones
// Función que añade el curso al carrito
function agregarProducto(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')) {
         const producto = e.target.parentElement.parentElement.parentElement.parentElement;
        
         
         leerDatosProducto(producto);
         
    }
}

// Lee los datos del curso
function leerDatosProducto(producto) {
    const infoProducto = {
         imagen: producto.querySelector('.imgproduct').src,
         titulo: producto.querySelector('.title-nombre').textContent,
         precio: producto.querySelector('.precio').textContent,
         id: producto.querySelector('a').getAttribute('data-id'), 
         cantidad: 1
    }


    if( articulosCarrito.some( producto => producto.id === infoProducto.id ) ) { 
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


    carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarProducto(e) {

     
    e.preventDefault();
    if(e.target.classList.contains('borrar-producto') ) {
         //e.target.parentElement.parentElement.remove();
         const productoId = e.target.getAttribute('data-id');
         
         
         // Eliminar del arreglo del carrito
         articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

         
           eliminarProductoLocalStorage(productoId);
         carritoHTML();

         
    }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(producto => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td style="width: 50px" >
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

         guardarProductoLocalStorage(producto);
         
    });

}


function vaciarArray(){
     vaciarCarrito();
      articulosCarrito = [];
}
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';
     


    // forma rapida (recomendada)
    while(contenedorCarrito.firstChild) {
         contenedorCarrito.removeChild(contenedorCarrito.firstChild);

     }


     vaciarLocalStorage();
     return false;


}

function guardarProductoLocalStorage(producto){
     let productos;

     productos =obtenerProductosLocalStorage();

     productos.push(producto);

     localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage(){
     let productosLS;

     if(localStorage.getItem("productos")== null){
          productosLS=[];
     }else{
          productosLS=JSON.parse(localStorage.getItem("productos"));

     }
     return productosLS;
}
function leerLocalStorage() {
     let productosLS;

     productosLS =obtenerProductosLocalStorage();

     productosLS.forEach(function(producto){
          const row = document.createElement("tr");

          row.innerHTML=`
          <td style="width: 50px" >
          <img src="${producto.imagen}" style="width: 100%;" >
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


function eliminarProductoLocalStorage(producto){
     let productosLS;
     productosLS=obtenerProductosLocalStorage();
     


     for (var i =0; i< productosLS.length; i++) {
          if (productosLS[i].id == producto) {
               productosLS.splice(i, 1);
          }
     }

    

     localStorage.setItem("productos", JSON.stringify(productosLS));
}

function vaciarLocalStorage(){
     localStorage.clear();
}

