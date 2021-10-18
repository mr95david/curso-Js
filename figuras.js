// Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado*4;
};
//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrada(lado){
    return lado*lado;
};
//console.log(`El area del cuadrado es: ${areaCuadrada}cm^2`);
console.groupEnd();

//Codigo Triangulo
/* console.group("Triangulo");
const baseTriangulo = 6;
const ladoTriangulo1 = 4;
const ladoTriangulo2 = 4;
const alturaTriangulo = 3.5;
console.log(`La base del triángulo mide ${baseTriangulo}cm, 
    el primer lado mide ${ladoTriangulo1}cm, 
    el segundo lado mide ${ladoTriangulo2}cm
    y la altura del triangulo mide ${alturaTriangulo}cm`);
 */

function perimetroTriangulo(lado1,lado2,base){
    return lado1*1+lado2*1+base*1;
};


function areaTriangulo(alturaTriangulo,baseTriangulo){
    return alturaTriangulo*baseTriangulo/2;
}
/* const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log(`El área del triángulo es ${areaTriangulo}cm^2`); */
console.groupEnd();
//Circulo
console.group("Circulo");
//Radio
/* const radioCirculo = 3;
//Diametro
const diametroCirculo = radioCirculo*2;
//pi */
const PI = Math.PI;

function diametroCirculo(radioCirculo){
    return radioCirculo*2;
}

//console.log(`El radio del circulo es ${radioCirculo}cm y el diametro es ${diametroCirculo}cm.`);

//Circunferencia
/* const perimetroCirculo = diametroCirculo*PI;
console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);
 */
function perimetroCirculo(diametroCirculo){
    return diametroCirculo*PI;
};

 //area
 /* 
const areaCirculo = radioCirculo*PI*PI;
console.log(`El area del circulo es ${areaCirculo}cm^2`);
 */
function areaCirculo(radioCirculo){
    return radioCirculo*PI*radioCirculo;
}

console.groupEnd();


// Desde aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    let tipoOperacion = "perimetro";
    let figura = "cuadrado";
    const perimetro = perimetroCuadrado(value);
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=perimetro;
} ;

function calcularAreaCuadrado(){
    let input = document.getElementById("ladoCuadrado");
    let value = input.value;
    let tipoOperacion = "Area";
    let figura = "Cuadrado";
    let area = areaCuadrada(value);
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=area;
};

function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById("lado1Triangulo");
    let lado2 = document.getElementById("lado2Triangulo");
    let base = document.getElementById("base");
    let perimetro = perimetroTriangulo(lado1.value,lado2.value,base.value);
    let tipoOperacion = "Perimetro";
    let figura = "Triangulo";
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=perimetro;
};

function calcularAreaTriangulo(){
    let altura = prompt("Ingrese el valor de la altura del triangulo: ");
    let base = document.getElementById("base");
    let area = areaTriangulo(altura*1, base.value*1);
    let tipoOperacion = "Area";
    let figura = "Triangulo";
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=area;
};

function calcularPerimetroCirculo(){
    let radio = document.getElementById("radioCircle");
    let valor = radio.value*1;
    let diametro = diametroCirculo(valor);
    let perimetro = perimetroCirculo(diametro);
    let tipoOperacion = "Perimetro";
    let figura = "Circulo";
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=perimetro;
};

function calcularAreaCirculo(){
    let radio = document.getElementById("radioCircle");
    let valor = radio.value*1;
    let area = areaCirculo(valor);
    let tipoOperacion = "Area";
    let figura = "Circulo";
    document.getElementById("typeOperation").innerHTML=tipoOperacion;
    document.getElementById("fig").innerHTML=figura;
    document.getElementById("resultado").innerHTML=area;
};