/*Leonel Gonzalez/Function*/
function probarCodigo()
/* bienvenida al usuario buloneria los amigos*/
{   
        let ingresar =confirm("Bievenido a buloneria los amigos, desea comprar en la pagina?")
        let ingresoNombre=prompt("por favor ingrese su nombre");
        let respuesta="x";
        let costo;

        console.log("Hola, bienvenido "+ ingresoNombre);
        while(respuesta=="x")
    {
    costo=parseInt(prompt("cual es su presupuesto para gastar?, asi le recomendamos nuestra mejor oferta"));
    if(costo>=10000)
        {
        console.log("pack de tornillos parker x 5000 unidades $4666");
        console.log("arandelas biseladas x 1000 unidades $7700");
        }
        
        if(costo<10000 && costo>=6300)
        {
        console.log("tuercas milimetricas autofrenantes 5/16 por bolsa $7000");
        }

        if(costo<8700 && costo>=6600)
        {
        console.log("tornillo autoperforante para chapa por 1000 unidades $6600");
        }
        
    if(costo<8000)
    {
            console.log("arandelas de vuelo ancho 3/8 por 1000 unidades $4999 ")
    }

    respuesta=prompt("si desea cambiar lo ingresado aprete 'x' de lo contrario oprima cualquier tecla");

    {
    let clavosPorbolsa = parseInt(prompt("que cantidad de clavos desea?"))
    let precioClavos = 400;
    let multiplicacion = clavosPorbolsa * precioClavos;
    console.log("el precio de " + clavosPorbolsa + "");
    alert("El precio de " + clavosPorbolsa+ " clavos es de: $" + multiplicacion);
    }

    }
    console.log("finalizo el proceso de carga");
    }
