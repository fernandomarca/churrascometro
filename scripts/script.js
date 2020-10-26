

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");
let mensagem = document.getElementById("mensagem");
mensagem.setAttribute("invisivel", "");

function calcular() {
  console.log(mensagem);
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let quantidadeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
  let quantidadeCerveja = cervejaPorPessoa(duracao) * adultos;
  let quantidadeBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${quantidadeCarne / 1000} kg de Carne</p>`;
  resultado.innerHTML += `<p>${quantidadeCerveja / 1000} litros de Cerveja</p>`;
  resultado.innerHTML += `<p>${quantidadeBebidas / 1000} litros de Bebidas</p>`;

  if (quantidadeCarne) {
    mensagem.innerHTML = `<h4>Ótimo churrasco</h4>`;
    mensagem.removeAttribute("invisivel");
  } else {
    mensagem.innerHTML = `<h4></h4>`;
    mensagem.setAttribute("invisivel", "");
  }
}

function carnePorPessoa(duracao) {

  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPorPessoa(duracao) {

  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPorPessoa(duracao) {

  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}