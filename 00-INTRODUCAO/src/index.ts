var a = 6;
var b = 15;
if (a==6){
    let a = 5; //este mantem o resultado interno ao bloco.
    var b = 3; // em contrapartida, este declara o valor para função, saindo do bloco.
    console.log(a); //resultado final 5
    console.log(b); //resultado final 3

}
console.log(a) //resultado final 6
console.log(b); //resultado final = 3