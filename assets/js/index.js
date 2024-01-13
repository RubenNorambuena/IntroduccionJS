precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


function sumar(){
    let cantidad = document.querySelector('#cantidad');
    let numeroActual = Number(cantidad.innerHTML);
    cantidad.innerHTML = numeroActual +1; 

    
    let precioTotal = document.querySelector('#valor-total');
    precioTotal.innerHTML = precio * Number(cantidad.innerHTML);
    
}

function restar(){
    let cantidad = document.querySelector('#cantidad');
    let numeroActual = Number(cantidad.innerHTML);
    cantidad.innerHTML = numeroActual -1; 
    
                
    let precioTotal = document.querySelector('#valor-total');
    precioTotal.innerHTML = precio * Number(cantidad.innerHTML);
                
}