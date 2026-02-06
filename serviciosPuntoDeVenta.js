ValorDescuento=function(monto, porcentajeDescuento){
    return monto * (porcentajeDescuento / 100);

}

calcularIVA=function(monto){
    return monto * 0.12;
}

calcularSubtotal=function(precioProducto, cantidad){
    return precioProducto * cantidad;
}
calcularTotal=function(subtotal, descuento, iva){
    return subtotal - descuento + iva;
}