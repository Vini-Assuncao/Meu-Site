// EXERCICIO 1
const botaoCurtir = document.querySelector("#btn-curtir")
const contadorCurtidas = document.querySelector("#contador")

botaoCurtir.addEventListener("click", () => {
    const curtidasAtuais = Number(contadorCurtidas.textContent)
    contadorCurtidas.textContent = curtidasAtuais+1
})

// EXERCICIO 2
const input = document.querySelector("#campo-texto")
const preview = document.querySelector("#preview-texto")

input.addEventListener("input", () => {
    preview.textContent = `Digitando: ${input.value}`
})

// EXERCICIO 3
const caixa = document.querySelector("#caixa-cor")

caixa.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = "#0000ff"
})
caixa.addEventListener("mouseout", () => {
    caixa.style.backgroundColor = "#95a5a6"
})

// EXERCICIO 4
const botaoReiniciar = document.querySelector("#btn-reiniciar")

botaoReiniciar.addEventListener("click", () => {
    contadorCurtidas.textContent = 0
    input.value = ""
    preview.textContent = "Digitando: ..."
})