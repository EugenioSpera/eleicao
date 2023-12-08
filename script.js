let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let votoNulo = 0;
let votoBranco = 0;
let voto;



for (let i = 1; i <= 10; i++) {
    voto = Number(prompt('Digite o número do candidato: '));

    if (voto == 1) {
        candidato1++
    }

    else if (voto == 2) {
        candidato2++
    }

    else if (voto == 3) {
        candidato3++
    }

    else if (voto == 4) {
        candidato4++
    }

    else if (voto > 4) {
        votoNulo++
    }

    else {
        votoBranco++
    }
}
alert("Total candidato1 é: " + candidato1 + "Total candidato2 é: " + candidato2 + "Total candidato3 é: " + candidato3 + "Total candidato4 é: " + candidato4 + "Total voto nulo é: " + votoNulo + "Total voto branco é: " + votoBranco)