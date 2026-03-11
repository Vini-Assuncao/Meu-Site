const btn = document.querySelectorAll(".bt_pedido");
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

