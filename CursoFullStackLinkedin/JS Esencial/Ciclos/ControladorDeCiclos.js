//Break | Continue

var contador = 0;
var cuenta = 0;

for(contador = 0; contador <= 20; contador++){
    if(contador == 5){
        break;
    }
    if (contador % 2 == 0){
        continue;
    }
    cuenta++
    debugger;
}
console.log("Hay " + cuenta + " numeros impares.");