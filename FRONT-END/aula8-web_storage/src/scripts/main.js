document.addEventListener("DOMContentLoaded", () => {
    inicializarSubtotal()
    inicializarHoverCards()
    inicializarVitrine()
})

function inicializarSubtotal() {
    // CONTINUE...
}

function inicializarHoverCards() {
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)"
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"
    })
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
        card.style.boxShadow = "none"
    })
    })
}

function inicializarVitrine() {
    const main = document.querySelector("main")

    if (!main) return

    main.addEventListener("click", (event) => {
    const clicado = event.target

    if (clicado.classList.contains("btn-menos")) {
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)

        spanQtd.textContent = Math.max(1, valorAtual - 1)
        atualizarPrecoCard(box)
    }
    if (clicado.classList.contains("btn-mais")) {
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)

        spanQtd.textContent = valorAtual + 1
        atualizarPrecoCard(box)
    }

    if (clicado.classList.contains("btn-pedido")) {
        event.preventDefault()

        const card = clicado.parentElement
        const nomePrato = card.querySelector("h3").textContent
        const precoUnitario = card.querySelector(".preco").textContent
        const qtdTotal = Number(card.querySelector(".qtd-valor").textContent)

        clicado.textContent = "✓ Adicionado"
        clicado.style.backgroundColor = "#27ae60"
        clicado.disabled = true

        setTimeout(() => {
            clicado.textContent = "Pedir agora"
            clicado.style.backgroundColor = ""
            clicado.disabled = false

            const box = card.querySelector(".quantidade-box")
            if (box) {
                const spanQtd = box.querySelector(".qtd-valor")
                if (spanQtd) {
                    spanQtd.textContent = "1"
                }
                atualizarPrecoCard(box)
            }
        }, 1500)

        const badgeExistente = card.querySelector(".badge-adicionado")

        if (!card.querySelector(".badge-adicionado")) {
        card.insertAdjacentHTML(
            "beforeend",
            "<span class='badge-adicionado'>✔ No resumo</span>",
        )
        }

        adicionarItemAoResumo(nomePrato, qtdTotal, precoUnitario, card)
    }
    })
}