window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnMostrar1").addEventListener("click", ejercicio1);
    document.querySelector("#btnMostrarWhile1").addEventListener("click", ejercicio1while);
    document.querySelector("#btnMostrarDoWhile1").addEventListener("click", ejercicio1dowhile);
    document.querySelector("#btnMostrar2").addEventListener("click", ejercicio2);
    document.querySelector("#btnMostrarWhile2").addEventListener("click", ejercicio2while);
    document.querySelector("#btnMostrarDoWhile2").addEventListener("click", ejercicio2dowhile);
    document.querySelector("#btnMostrar3").addEventListener("click", ejercicio3);
    document.querySelector("#btnMostrar3While").addEventListener("click", ejercicio3while);
    document.querySelector("#btnMostrar3DoWhile").addEventListener("click", ejercicio3dowhile);
    document.querySelector("#btnMostrar4").addEventListener("click", ejercicio4);
    document.querySelector("#btnMostrar4While").addEventListener("click", ejercicio4while);
    document.querySelector("#btnMostrar4DoWhile").addEventListener("click", ejercicio4dowhile);
    document.querySelector("#btnMostrar5").addEventListener("click", ejercicio5);
    document.querySelector("#btnMostrar5While").addEventListener("click", ejercicio5while);
    document.querySelector("#btnMostrar5DoWhile").addEventListener("click", ejercicio5dowhile);
    document.querySelector("#btnMostrar6").addEventListener("click", ejercicio6);
    document.querySelector("#btnMostrar7").addEventListener("click", ejercicio7);
    document.querySelector("#btnMostrar8").addEventListener("click", ejercicio8);
    document.querySelector("#btnMostrar9").addEventListener("click", ejercicio9);
    document.querySelector("#btnMostrar10").addEventListener("click", ejercicio10);
    document.querySelector("#btnMostrar11").addEventListener("click", ejercicio11);
    document.querySelector("#btnMostrar12").addEventListener("click", ejercicio12);
    document.querySelector("#btnMostrar13").addEventListener("click", ejercicio13);
    document.querySelector("#btnMostrar14").addEventListener("click", ejercicio14);
    document.querySelector("#btnMostrar15").addEventListener("click", ejercicio15);
    document.querySelector("#btnMostrar16").addEventListener("click", ejercicio16);
    document.querySelector("#btnMostrar17").addEventListener("click", ejercicio17);
    document.querySelector("#btnMostrar18").addEventListener("click", ejercicio18);

}
function ejercicio1() {
    let vari = ` `;
    for (let i = 1; i <= 1000; i++) {
        vari += i + `<br>`;
        document.querySelector("#pResultado").innerHTML = vari;
    }
}
function ejercicio1while() {
    let vari = ` `;
    let numeros = 0;
    while (numeros <= 999) {
        numeros++;
        vari += numeros + `<br>`;
        document.querySelector("#pResultado").innerHTML = vari;
    }
}
function ejercicio1dowhile() {
    let vari = ` `;
    let numeros = 0;
    do {
        numeros++;
        document.querySelector("#pResultado").innerHTML = vari;
        vari += numeros + `<br>`;
    } while (numeros <= 1000);
}





function ejercicio2() {
    let vari = ` `;
    for (let i = -100; i <= 10; i++) {
        vari += i + `<br>`;
        document.querySelector("#pResultado2").innerHTML = vari;
    }
}
function ejercicio2while() {
    let vari = ` `;
    let numeros = -101;
    while (numeros <= 9) {
        numeros++;
        vari += numeros + `<br>`;
        document.querySelector("#pResultado2").innerHTML = vari;
    }
}
function ejercicio2dowhile() {
    let vari = ` `;
    let numeros = -101;
    do {
        numeros++;
        document.querySelector("#pResultado2").innerHTML = vari;
        vari += numeros + `<br>`;
    } while (numeros <= 10);
}





function ejercicio3() {
    let vari = ` `;
    for (let i = 10; i <= 40; i++) {
        vari += i + `<br>`;
        document.querySelector("#pResultado3").innerHTML = vari;
    }
}
function ejercicio3while() {
    let vari = ` `;
    let numeros = 9;
    while (numeros <= 39) {
        numeros++;
        vari += numeros + `<br>`;
        document.querySelector("#pResultado3").innerHTML = vari;
    }
}
function ejercicio3dowhile() {
    let vari = ` `;
    let numeros = 9;
    do {
        numeros++;
        document.querySelector("#pResultado3").innerHTML = vari;
        vari += numeros + `<br>`;
    } while (numeros <= 40);
}





function ejercicio4() {
    let vari = ` `;
    for (let i = -30; i <= 20; i++) {
        vari += i + `<br>`;
        document.querySelector("#pResultado4").innerHTML = vari;
    }
}
function ejercicio4while() {
    let vari = ` `;
    let numeros = -31;
    while (numeros <= 19) {
        numeros++;
        vari += numeros + `<br>`;
        document.querySelector("#pResultado4").innerHTML = vari;
    }
}
function ejercicio4dowhile() {
    let vari = ` `;
    let numeros = -31;
    do {
        numeros++;
        document.querySelector("#pResultado4").innerHTML = vari;
        vari += numeros + `<br>`;
    } while (numeros <= 20);
}





function ejercicio5() {
    let vari = ` `;
    for (let i = 1; i <= 450; i++) {
        if (i % 5 === 0) {
            vari = vari + i + `</br>`;
        }
    }
    document.querySelector("#pResultado5").innerHTML = vari;
}

function ejercicio5while() {
    let vari = ` `;
    let numeros = 1;
    while (numeros <= 450) {
        if (numeros % 5 === 0) {
            vari += numeros + `<br>`;
        }
        numeros++;
    }
    document.querySelector("#pResultado5").innerHTML = vari;
}
function ejercicio5dowhile() {
    let vari = ` `;
    let numeros = 1;
    do {
        if (numeros % 5 === 0) {
            vari += numeros + `<br>`;
        }
        numeros++;
    } while (numeros <= 450);
    document.querySelector("#pResultado5").innerHTML = vari;
}




function ejercicio6() {
    let vari = ` `;
    for (let i = -33; i <= 230; i++) {
        if (i % 4 === 0) {
            vari = vari + i + `<br>`;
        }
    }
    document.querySelector("#pResultado6").innerHTML = vari;
}


function ejercicio7() {
    let vari = ` `;
    let num = Number(document.querySelector("#Numero").value);
    if (num >= 2 && num <= 50) {
        for (let i = 0; i <= num; i++) {
            vari += "-";
            document.querySelector("#pResultado7").innerHTML = vari;
        }
    } else {
        document.querySelector("#pResultado7").innerHTML = "Ese numero no esta dentro del rango";
    }
}


function ejercicio8() {
    let vari = ` `;
    let num1 = Number(document.querySelector("#Numero8").value);
    let num2 = Number(document.querySelector("#NumeroE8").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            let aux = num2;
            num2 = num1;
            num1 = aux;
        }
        for (let i = num1; i <= num2; i++) {
            vari += i + `<br>`;
        }
        document.querySelector("#pResultado8").innerHTML = vari;
    } else {
        document.querySelector("#pResultado8").innerHTML = "Ingresar valores validos";
    }
}

function ejercicio9() {
    let num1 = Number(document.querySelector("#Numero9").value);
    let num2 = Number(document.querySelector("#NumeroE9").value);
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }
    document.querySelector("#pResultado9").innerHTML = `El producto de ${num1} y ${num2}
    es ${resultado};`
}

function ejercicio10() {
    let num1 = Number(document.querySelector("#Numero10").value);
    let num2 = Number(document.querySelector("#NumeroE10").value);
    let resultado = 1;
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                resultado *= i;
            }
            document.querySelector("#pResultado10").innerHTML = `El producto de ${num1} y ${num2}
        es ${resultado};`
        } else {
            document.querySelector("#pResultado10").innerHTML = "El primer numero debe ser menor al primer numero"
        }
    }
}


function ejercicio11() {
    let num1 = Number(document.querySelector("#Numero11").value);
    let num2 = Number(document.querySelector("#NumeroE11").value);
    let num3 = Number(document.querySelector("#NumeroEj11").value);
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let mensaje = `Los multiplos de ${num3} entre ${num2} y ${num1} son:`;
        for (let i = num1; i <= num2; i++) {
            if (i % num3 === 0) {
                mensaje += `${i}, `;
            }
            document.querySelector("#pResultado11").innerHTML = mensaje;
        }
    } else {
        document.querySelector("#pResultado11").innerHTML = "Ingresar valor valido"
    }
}

function ejercicio12() {
    let factorial = 1;
    let num = Number(document.querySelector("#Numero12").value);
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.querySelector("#pResultado12").innerHTML = `El factorial de ${num} es ${factorial}.`;
}


function ejercicio13() {
    let ancho = Number(document.querySelector("#Numero13").value);
    let alto = Number(document.querySelector("#Numeroe13").value);

    if (!isNaN(ancho) && !isNaN(alto)) {
        let rectangulo = "0";
        let vari;
        if (ancho > 0 && alto > 0) {
            for (let i = 1; i < ancho; i++) {
                rectangulo = rectangulo + "0";
            }
            vari = rectangulo;
            for (let j = 1; j < alto; j++) {
                rectangulo = rectangulo + "<br>" + vari
            }
            document.querySelector("#pResultado13").innerHTML = rectangulo;
        } else {
            document.querySelector("#pResultado13").innerHTML = "Ingresar valor mayor a 0";
        }
    } else {
        document.querySelector("#pResultado13").innerHTML = "Ingresar valor valido"
    }
}

function ejercicio14() {
    let num = Number(document.querySelector("#Numero14").value);
    if (!isNaN(num)) {
        let cont = 0;
        let mensaje = "";
        if (num === 0) {
            cont = 1;
            mensaje = `La cantidad de digitos que tiene el numero ${num} es: ${cont}`;
        } else {
            for (let i = num; i >= 1; i = i / 10) {
                cont++;
            }
            mensaje = `La cantidad de digitos que tiene el numero ${num} es: ${cont}`;
        }
        document.querySelector("#pResultado14").innerHTML = mensaje;
    } else {
        document.querySelector("#pResultado14").innerHTML = `Porfavor ingrese un numero`;
    }
}

function ejercicio15() {
    let mensaje = "";
    let num = Number(document.querySelector("#Numero15").value);
    if (!isNaN(num)) {
        if (num < 2000) {
            mensaje = "Ingresar un valor mayor a 2000";
        } else {
            while (num >= 100) {
                num = num / 20;
            }
            mensaje = `El resultado es  ${num}`;
        }
        document.querySelector("#pResultado15").innerHTML = mensaje;
    } else {
        document.querySelector("#pResultado15").innerHTML = "Ingresar valor valido"

    }
}

function ejercicio16() {
    let num1 = Number(document.querySelector("#Numero16").value);
    let num2 = Number(document.querySelector("#Numeroe16").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            let aux = num2;
            num2 = num1;
            num1 = aux;
        }
        let multiplo = 0;
        for (let i = num1; i <= num2; i++) {
            if (i % 4 === 0 && i % 6 === 0) {
                multiplo = i;
                break;
            }
        }
        if (multiplo !== 0) {
            document.querySelector("#pResultado16").innerHTML = `El primer multiplo de 4 y 6 a la vez entre ${num1} y ${num2} es:   ${multiplo}`;
        } else {
            document.querySelector("#pResultado16").innerHTML = `No hay multiplos de 4 y 6 a la vez entre ${num1} y ${num2} `;
        }
    } else {
        document.querySelector("#pResultado16").innerHTML = "Ingrese valores validos"
    }
}

function ejercicio17() {
    let cociente = 0;
    let resto;
    let resultado;
    let dividendo = Number(document.querySelector("#Numero17").value);
    let divisor = Number(document.querySelector("#Numeroe17").value);
    if (!isNaN(dividendo) && !isNaN(divisor)) {
        if (dividendo > 0 && divisor > 0) {
            resto = dividendo;
            while (resto >= divisor) {
                resto = resto - divisor;
                cociente++;
            }
            resultado = `Dividendo ${dividendo} <br> Divisor ${divisor} <br> Cociente ${cociente} <br>
            Resto  ${resto}`;
        } else {
            document.querySelector("#pResultado17").innerHTML = "Ingrese valores mayores a 0";
        }
    } else {
        document.querySelector("#pResultado17").innerHTML = "Ingrese valores validos";
    }
    document.querySelector("#pResultado17").innerHTML = resultado
}

function ejercicio18(){
    let mensaje = "";
    let num = Number(document.querySelector("#Numero18").value);
    if (!isNaN(num)){
        for(let i = 30; i <= 200; i++){
            if(i % num === 0 && i % 2 === 0){
                mensaje += i + "</br>";
            }
            document.querySelector("#pResultado18").innerHTML = `Los números mayores a 30 y menores a 200 que son multiplos de ${num}
            y pares son:<br> ${mensaje}`; 
        }
    }else{
        document.querySelector("#pResultado18").innerHTML = "Ingrese valores validos";
    }
}