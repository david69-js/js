var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Definir un modulo
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert(" Tienda de Informarica " + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informarica = Tienda.Informatica;
var cargar_informatica = new Informarica(' Esta es la Tienda de Tecnologia');
// Decorador
function arranque(lanzar) {
    return function (targer) {
        targer.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa = __decorate([
        arranque('Lanzamiento de Angular y Node JS ')
    ], Programa);
    return Programa;
}());
// Asi se realiza una herencia de padrea hija 
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAlldata = function () {
        return 'El nombre es del programa es : ' + this.nombre + ', La version es : ' + this.version + ', El Time line es : ' + this.timeline;
    };
    return EditorVideo;
}(Programa));
var programa = new Programa();
programa.lanzamiento();
var editor = new EditorVideo();
editor.setNombre("Kari");
editor.setVersion(12);
editor.setTimeline(12);
console.log(editor.getAlldata());
// Logica del Formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var version = document.getElementById("version").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    programas.push(programa);
    var list = "";
    for (var i = 0; i <= programas.length - 1; i++) {
        list = list + "<li>" + "Programa: " + programas[i].getNombre() + ", Version: " + programas[i].getVersion() + "</li>";
        console.log(programas);
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    nombre = document.getElementById("nombre").value = '';
    version = document.getElementById("version").value = '';
}
