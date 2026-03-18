const btn = document.querySelectorAll(".bt-pedido");
const inputQtdPrato = document.querySelector("#qtd-lasanha")
const textoPreco = document.querySelector("#preco-lasanha")

if(inputQtdPrato && textoPreco) {
    inputQtdPrato.addEventListener("input", () => {
        const precoUnitario = 45.0
        const total = Number(inputQtdPrato.value) * precoUnitario

        textoPreco.textContent = `R$ ${total.toFixed(2)}`
        textoPreco.style.color = total > 150 ? "#c0392b" : "#de7b03"
    })
}

btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log("O vigia detectou um clique no botão!")
    btn.textContent = "Processando...";
  })
})

// ADICIONANDO OUVINTE COMPARTILHADO (MODELO PAI E FILHO)

const massas = document.querySelector("#secao-massas")

massas.addEventListener('click', (event) => {
  const clicado = event.target

  if (clicado.classList.contains('bt-pedido')) {
    console.log("Você clicou em um botão de pedido de MASSA!")
  }
})

// EVENTO DE CLIQUE PARA TODOS OS BOTÕES

const botoesPedido = document.querySelectorAll(".bt-pedido")
console.log()

botoesPedido.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    event.preventDefault() // EVITA QUALQUER COMPORTAMENTO PADRÃO

    botao.textContent = "✓ Pedido enviado"
    botao.style.backgroundColor = "#274706"

    botao.disable = true
  })
})

// AÇÕES INTERATIVIDADE CARDS

const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)"
    card.style.boxShadow = "0px 0px 5px 5px #8b4e03"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "0px 0px 5px 3px #c56e04"
  })
})