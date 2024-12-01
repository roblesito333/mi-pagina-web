function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;

}

function multiplicacion(a,b){
    return a*b;

}

function division(a,b){
    if (b===0){
        return "Error: no se puede dividir entre 0";
    }

    return a/b
}

//Funcion principal calculadora

function calculadora(num1,num2,operacion){
    let resultado;

    switch(operacion){
        case 'sumar':
            resultado=suma(num1,num2);
            break;
        case 'restar':
            resultado=resta(num1,num2);
            break
        case 'multiplicar':
            resultado=multiplicacion(num1,num2);
            break
        case 'dividir':
            resultado=division(num1,num2);
            break
        default:
            resultado="Operacion invalida";
        
        
    }

    return resultado;
}

// solicitar los valores al usuario

let continuar = true;

while (continuar){

    let numero1 = parseInt(prompt("Ingresa el primer numero: "));
    let numero2 = parseInt(prompt("Ingresa el segundo numero: "));
    let operacion = prompt("Seleccion la operacion a realizar: Sumar - Restar - Multiplicar - Dividir");

    let resultado = calculadora(numero1,numero2,operacion.toLowerCase());

// mostrar el resultado

    alert(`El resultado de ${operacion} entre ${numero1} y ${numero2} es: ${resultado}`);
// pregunta al usuario si quiere seguir o salir
    let seguir = prompt('Deseas terminar:   (salir/seguir)' )
    if(seguir.toLocaleLowerCase() == 'salir'){
    continuar = false;
    alert('Gracias por usar la calculadora')
    }
}