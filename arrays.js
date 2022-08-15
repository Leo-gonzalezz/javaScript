///Leonel Gonzalez proyecto ferreteria//
//carrito de compras//array de amoladoras//
const productos = [
{nombre: "amoladora bosch", precio: 15.533},
{nombre: "amoladora stanley", precio : 12.555},
{nombre: "amoladora skill", precio : 9.599},
];
//inicio array//
let carrito = []

let bienvenidaUsuario = prompt("hola bienvenido a ferreteria los amigos desea comprar?");

while(bienvenidaUsuario != "si" && bienvenidaUsuario != "no"){
alert("por favor ingresar si o no")
bienvenidaUsuario = prompt("desea comprar algo si o no")
}

if(bienvenidaUsuario == "si"){
    alert("hoy disponible ofertas de amoladoras")
    let misProductos = productos.map(
        (producto) => producto.nombre + "$" + producto.precio + ""
        );
        alert(misProductos.join("//"))
}
else if(bienvenidaUsuario == "no"){
    alert("gracias por venir Hasta luego!")
}
while(bienvenidaUsuario != "no"){
    let producto = prompt("agrega tu amoladora al carrito")
    let precio = 0

    if(producto == "amoladora bosch" || producto == "amoladora stanley" || producto == "amoladora skill"){
        switch(producto){
                    case "amoladora bosch":
                    precio = 15.533
                    break;
                    case "amoladora stanley":
                    precio = 12.555
                    break;
                    case "amoladora skill":
                        precio = 9.599
                        break;
                        default:
                            break;
        }
        let unidades = parseInt(prompt("cuantas unidades desea?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no disponemos de ese producto")
    }
    
    bienvenidaUsuario = prompt("desea seguir comprando?")

    while (bienvenidaUsuario=== "no"){
        alert("gracias por la compra, en la consola vera su total")
        carrito.forEach((carritoTotal)=>{
            console.log(`producto: ${carritoTotal.producto} , unidades: ${carritoTotal.unidades}, total a pagar por producto ${carritoTotal.unidades * carritoTotal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es : ${total}`);

