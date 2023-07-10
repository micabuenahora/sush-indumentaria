
function maquinaDeCaramelos(dinero){
    const precioCaramelo = 0.5
    let salir = true
    
    
    while (salir){
      alert("bienvenidos a la maquina expendedora de caramelos sugus")

      let cantidad = parseInt(prompt("Ingrese la cantidad deseada de caramelos:"));
      let montoTotal = cantidad * precioCaramelo;
      alert("El monto total es de: us$" + montoTotal)
      salir = false 
      
      let dinero = parseFloat (prompt("ingrese la cantidad de dinero con el que va a pagar:"))
      salir = false 
    
        if (dinero > montoTotal) { 
        let vuelto = dinero - montoTotal;
        alert("Tu cambio es de: us$" + " " + vuelto + " " + "gracias por tu compra!")
        }else if(dinero < montoTotal){
        alert("el dinero ingresado no alcanza para comprar esta cantidad de caramelos, intente nuevamente!")
        }else {
        alert("ingresaste el monto justo, Gracias por tu compra!")
        }
    }
    }
    
    maquinaDeCaramelos()