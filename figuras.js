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
    return lado1+lado2+base;
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
    return radioCirculo*PI*PI;
}

console.groupEnd();