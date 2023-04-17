const FormatearDinero = (valor) => {
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD'}).format(valor);
}

const calcularTotalPagar =(cantidad,plazo) =>{
    let total;
    //Mientras mas cantidad mas interes
    if (total<5000) {
        total=cantidad*1.5;
    }else if (total>=5000 && cantidad < 10000){
        total=cantidad*1.4;
    }else if (total>=10000 && cantidad < 15000){
        total=cantidad*1.3;
    }else{
        total=cantidad*1.2;
    }
    //Mientras mas plazo mas interes
    if (plazo===6) {
        total*= 1.1;
    }else if (plazo===12) {
        total*= 1.2;
    }else{
        total*= 1.3;
    }
    return total;
}

export{
    FormatearDinero,
    calcularTotalPagar
}