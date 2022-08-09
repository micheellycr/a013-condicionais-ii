/* let idadeDependente = 13 */

/* if(idadeDependente >= 13){
    if(idadeDependente >= 18){
        console.log("Seu dependente já pode ter um cartão de crédito própio")
    }else{
        console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
    }
}else{
    console.log("Consulte outras possibilidades")
}
 */
/* idadeDependente === 13 ? console.log("A idade do depente é 13 já pode ter cartão") : console.log("Consulte outras possibilidades") */

/* let cartao = Number(prompt("Solicitação de cartão de crédito. Escolha uma opção: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Gold"))

switch(cartao){
    case 1: 
       console.log("Cartão Fácil adquirido")
       break;
    case 2: 
       console.log("Cartão Black adquirido")
       break;
    case 3: 
       console.log("Cartão Platinum adquirido")
       break;
    case 4: 
        console.log("Cartão Master Gold adquirido")
        break;
    default:
        console.log("Escolha uma das opções disponíveis")
} */

let numero = Number(prompt("Insira um número aqui:"))

 /* if(numero%2 === 0){
    if(numero%3 === 0){
        console.log("O número é divisilvel")
    }}
    else{
        console.log("O número não é divisivel")
    } 

    numero === numero%3 === 0 && numero%2 === 0 ? console.log("O número é divisilvel") : console.log("O número não é divisivel") 

    numero === Number(30) ? console.log("UFA ACERTEI") : console.log("não foi dessa vez :(")  */

 switch(numero){
    case 6:
        console.log("Você acertou!")
        break;
    case 12:
        console.log("Você acertou!")
        break;
    case 18:
        console.log("Você acertou!")
        break;
    case 24:
            console.log("Você acertou!")
            break;
    case 30:
        console.log("Você acertou!")
        break;
    default:
        console.log("O número é maior que 30 ou menor que 6")
} 

