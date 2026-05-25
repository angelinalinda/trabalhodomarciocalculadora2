let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
  conta = Number(evento.target.value)
  calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(events) {

    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box") 

  if (events.target.value === "0") {
    paragrafoErro.style.display = "block"
    divErro.setAttribute("id", "erro-div")

  } 
  else {
    paragrafoErro.style.display = "none"
    divErro.setAttribute("id", "")
    pessoas = Number(events.target.value);
  }

  calcular()
}

const botoesGorjeta = document.querySelectorAll('.gorjeta input[type="button"]');

botoesGorjeta.forEach(botao => {
  botao.addEventListener("click", receberPorcentagem);
});

function receberPorcentagem(events) {

  botoesGorjeta.forEach(botao => {

    botao.classList.remove("botao-ativo")

    if(botao.value === events.target.value){
        botao.classList.add("botao-ativo")
    }

  })

  if(events.target.value !== ""){
    porcentagem = parseFloat(events.target.value) / 100
    console.log(porcentagem)
  } 
  else{
    porcentagem = 0
  }

  calcular()
}

const gorjetainput = document.querySelector("#outra")
gorjetainput.addEventListener("input", receberPorcentagem)

function calcular(){

    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0){

        const strongeGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongeGorjetaTotal.innerHTML = `R$ ${((conta * porcentagem) / pessoas).toFixed(2)}`

        const strongeTotal = document.querySelector(".total > strong")

        strongeTotal.innerHTML  = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`
    }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

 function limpar() {
  contaInput.value = ""
   
  botoesGorjeta.forEach(botao =>(
      botao.classList.remove("botao-ativo")
  ))

  gorjetainput.value = ""

  pessoasInput.value = ""

  document.querySelector(".gorjeta-total > strong").innerHTML = "R$ 0.00"
  document.querySelector(".total > strong").innerHTML = "R$ 0.00"
}
