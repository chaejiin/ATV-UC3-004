let num1, num2, contador, saidacontador = " ";
 
 
num1 = Number(prompt("Digite o primeiro número:"));
 
num2 = Number(prompt("Digite o segundo número:"));
 
if (num1 == num2) {
    alert(" - Impossível incrementar ou decrementar!");
} else {
    saidacontador = " "
    if (num1 > num2) {
 
        saidacontador += "INICIO" + " \n";
 
        for (contador = num1; contador >= num2; contador--) {
            saidacontador += contador + "\n";
        }
 
 
        saidacontador += "SAIDA" + '\n';
 
    } else {
        saidacontador += "INICIO" + " \n";
 
        for (contador = num1; contador <= num2; contador++) {
 
            saidacontador += contador + "\n";
        }
 
        saidacontador += "SAIDA" + '\n';
    }
 
    alert(saidacontador);
 
 
}