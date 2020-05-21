var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Amarillo";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW generico";
        }
        else {
            this.modelo = "BMW generico";
        }
    }
    // Funciones 
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor('Rojo');
coche.setModelo('Toyota Corola');
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El color del coche 1 es: " + coche.getColor());
//console.log("El modelo del coche 1 es: "+coche.getModelo());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche 1 despues de frenar es: " + coche.getVelocidad());
/*
coche_dos.setColor('Azul');
coche_tres.setColor('Verde');
console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("El color del coche 3 es: "+coche_tres.getColor());
*/ 
