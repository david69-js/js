alert('Wenas las dias');

function sumame(numero1,numero2, muestraysuma, sumapordos){
    var sumar = numero1+numero2;

    muestraysuma(sumar)
    sumapordos(sumar);

    return sumar;
}// la funcion de flecha sirve para abreviar y ser mas ordenado  => .
sumame(3,3, dato =>{
    console.log("La suma es de: ", dato);
},
dato =>{
    console.log("La por dos es de: ",(dato*2));
}

)

function calculadora(n1,n2){
        console.log("La suma es de ;", (n1+2));
        console.log("La resta es de ;", (n1-2));
        console.log("La mutiplicacione es de ;", (n1*2));
        console.log("^^*****************");

        return "Hola soy la calculadora";

}    
calculadora(2,4);