//declaracion variables
let carritoDeCompras = []
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const selectMarca = document.getElementById('selectMarca')
const buscador = document.getElementById('search')




//filtro carrito
selectMarca.addEventListener('change',()=>{
    if(selectMarca.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        mostrarProductos(stockProductos.filter(item=> item.marca == selectMarca.value))
    }
})

//Buscador
buscador.addEventListener('input',()=>{
    mostrarProductos(stockProductos.filter(item=> item.nombre.toLowerCase().includes(buscador.value.toLowerCase())))
})


mostrarProductos(stockProductos)

//Function inicio
function mostrarProductos(array){ 
    contenedorProductos.innerHTML=''
   array.forEach(item =>{

    let div = document.createElement('div')

    div.className = 'producto'

    div.innerHTML= `<div class="card">
                        <div class="card-image">
                        <img src="${item.img}" />
                        <span class="card-title">${item.nombre}</span>
                        <a
                            id="botonAgregar${item.id}"
                            class="btn-floating halfway-fab waves-effect waves-light red"
                            ><i class="material-icons">add_shopping_cart</i></a
                        >
                        </div>
                        <div class="card-content">
                        <p>${item.desc}</p>
                        <p>marca: ${item.marca}</p>
                        <p>$${item.precio}</p>
                        </div>
                </div>`
                
    contenedorProductos.appendChild(div)

    let btnAgregar = document.getElementById(`botonAgregar${item.id}`)
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(item.id);
    })
   })
}


function agregarAlCarrito(id) {
    let existe = carritoDeCompras.find(produc => produc.id == id)
    if(existe){
        existe.cantidad = existe.cantidad + 1
        document.getElementById(`cant${existe.id}`).innerHTML = `<p id="cant${existe.id}">cantidad:${existe.cantidad}</p>`
        actualizarCarrito()
        GuardarStorage();
    }else{
        let productoAgregar = stockProductos.find(item=> item.id == id)
        productoAgregar.cantidad = 1
        carritoDeCompras.push(productoAgregar);
        mostrarCarrito(productoAgregar)
        actualizarCarrito()
        GuardarStorage();
    }
    
}



function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML += `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="cant${productoAgregar.id}">cantidad:${productoAgregar.cantidad}</p>
                    <button class="boton-eliminar" id="${productoAgregar.id}">
                    <i class="fas fa-trash-alt"></i>
                    </button>`
    contenedorCarrito.appendChild(div)
}

function eliminar() {
    let btnEliminar = document.getElementsByClassName('boton-eliminar')
    for (const btn of btnEliminar) {
        btn.addEventListener('click',(e)=>{
            btn.parentElement.remove();
            carritoDeCompras = carritoDeCompras.filter(item => item.id != e.target.parentElement.id)
            actualizarCarrito()
        })
    }
}

  



function  actualizarCarrito (){
   contadorCarrito.innerText= carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)            
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}                                                             



//local storge//

function GuardarStorage() {
    localStorage.setItem("carroOlvidado",JSON.stringify(carritoDeCompras)); //Guarda en storage.
  }
 
 function VerificarCargar() {
    let arrayCarrito = JSON.parse(localStorage.getItem("carroOlvidado")); //Trae el carrito de la storage.
   if(arrayCarrito) { //Si hay algo...
      const Toast = Swal.mixin({ //Sweet alert tu carrito espera.
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        title: 'Tu carrito te espera!'
      })
    }
}

