console.log("Calcular monto a pagar segun el medio de pago")
let monto = prompt("Insertar monto").toLowerCase();
alert("Debito tiene 5% de descuento, credito tiene hasta 6 cuotas con interes del 10% con amortizacion alemana y mas de 6 cuotas es con 30% de interes fijo");

let MedioDePago = prompt("¿Vas a pagar con debito o credito?").toLowerCase()

if((MedioDePago == "debito") || (MedioDePago == "tarjeta de debito")){
    alert("Monto final: $" + monto*0.95);

}else if ((MedioDePago == "credito") || (MedioDePago == "tarjeta de credito")){
}else {alert ("No es un medio de pago adecuado")};
/* Quise declarar "cuotas" dentro del IF para cuando pongo medio de pago credito/tarjeta de credito pero no me lo aceptaba
Taampoco supe como frenar el codigo cuando da opcion DEBITO, sigue poniendo los prompt para las cuotas*/
let cuotas = prompt("en cuantas cuotas vas a pagar?").toLowerCase()
let resultado1 = 0
let resultado2 = 0
function calcintfijo(a, b) {
    return a*0.30
}
function calcintale(c) {
    return c*0.35
}
if (cuotas <=6){
    for (let i = 1; i <= cuotas;i++){
    let amrt = (monto - ((monto/cuotas)*(i-1)))*0.1
    let cfinal = (monto/cuotas) + amrt
    alert ("Tu cuota n°" + i + " va a ser de: $" + cfinal)
    

}    alert ("Vas a pagar de interes total " + calcintale(monto) )
} else if ((cuotas >7) && (cuotas <=12)){
    alert (" Vas a pagar $" + (monto/cuotas)*1.30 + " en " + cuotas +" cuotas mensuales")
    alert ("Vas a pagar de interes total " + calcintfijo(monto))
}   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
