class Prato {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    formatarPreco() {
        return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
    }

    aplicarDesconto(percentual) {
        this.preco = this.preco * (1 - percentual/100)
    }
}

const cardapio = [
    new Prato("Feijoada Completa", 42.9, "Prato principal"),
    new Prato("Moqueca", 58, "Prato principal"),
    new Prato("Coxinha Artesanal", 8.5, "Petisco"),
    new Prato("Brigadeiro Gourmet", 6, "Sobremesa"),
    new Prato("Suco de Maracujá", 12.00, "Bebida"),
    new Prato("Morango do Amor", 15, "Sobremesa")
]

console.log("=== Pratos Criados ===")
cardapio.forEach(prato => {
    console.log(`${prato.nome} → ${prato.formatarPreco()}`)
})

const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato) {
  const card = document.createElement("div")
  card.className = 'card'

  card.innerHTML =
  `<h3>${prato.nome}</h3>
  <span class="categoria">${prato.categoria}</span>
  <div class="preco">${prato.formatarPreco()}</div>`

  card.addEventListener("click", () => {
    alert(
        `
        🍽️ ${prato.nome} \n\n
        Categoria: ${prato.categoria}
        `
    )
  })
  
  return card
}

function renderizarCardapio() {
    containerCardapio.innerHTML = ''

    cardapio.forEach(prato => {
        const card = criarCardPrato(prato)
        containerCardapio.appendChild(card)
    })
}
renderizarCardapio()

cardapio[1].aplicarDesconto(10)
renderizarCardapio()