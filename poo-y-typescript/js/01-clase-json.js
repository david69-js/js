var bicicleta = {
    color: 'rojo',
    modelo:'bmx',
    frenos:'De disco',
    cambiarColor: function(nuevo){
        this.color = nuevo
        console.log(this)
    }   
}
bicicleta.cambiarColor('azul');
