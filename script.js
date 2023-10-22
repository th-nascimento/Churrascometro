// Carne 400 g por pessoa, +6 horas será 650 g;
// Cerveja 1200 ml por adulto, +6 horas será 2000 ml;
// Bebida 1200 ml por pessoa, +6 horas será 2000 ml;

// Crianças equivalem a 1/2 da quantidade para adultos;

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebida = bebidaPP(duracao);
    
    let qtdTotalCarnes = adultos * carne + (criancas * carne/2);
    let qtdTotalCerveja = adultos * cerveja;
    let qtdTotalBebida = adultos * bebida + (criancas * bebida/2);

    resultado.innerHTML = `<li>${qtdTotalCarnes / 1000} kg de carnes;</li>`
    resultado.innerHTML += `<li>${Math.ceil(qtdTotalCerveja / 355)} latas de cerveja;</li>`
    resultado.innerHTML += `<li>${Math.ceil(qtdTotalBebida / 2000)} garrafas de refrigerante.</li>`
    
    function carnePP(duracao) {
            if (duracao >= 6) {
                return 650;
            }
            else {
                return 400;
            }
    }

    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 2000;
        }
        else {
            return 1200;
        }
    }    

    function bebidaPP(duracao) {
        if (duracao >= 6) {
            return 2000;
        }
        else {
            return 1200;
        }
    }

    console.log("Churrasco para " + 
                (parseInt(adultos) + parseInt(criancas)) + 
                " pessoa(s), sendo " + criancas + 
                " dela(s) criança(s), por " + duracao + " hora(s):")
    
    console.log((qtdTotalCarnes / 1000) + " kg de carnes;")
    console.log((Math.ceil(qtdTotalCerveja / 355)) + " latas de cerveja;")
    console.log((Math.ceil(qtdTotalBebida / 2000)) + " garrafas de refrigerante.")
    console.log("---------------------------------------------------------------------")
}