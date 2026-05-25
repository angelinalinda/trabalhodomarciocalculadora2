let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
  conta = Number(evento.target.value)
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

 porcentagem = parseFloat(events.target.value) / 100
}
