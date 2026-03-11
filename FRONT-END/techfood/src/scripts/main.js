console.log(window.location.href)

const titulo = document.getElementById('titulo-site')
const saudacao = document.querySelector('#boas-vindas')

const destaque = 2
const fotoPratoDestaque = document.querySelector(`.card:nth-child(${destaque}) img`)
const cardDestaque = document.querySelector(`.card:nth-child(${destaque})`)

const agora = new Date()
const horaAgora = agora.getHours()
if (horaAgora >= 0 && horaAgora <= 12) {
    saudacao.textContent = "Bom dia!"
} else if (horaAgora >= 13 && horaAgora <= 17) {
    saudacao.textContent = "Boa tarde!"
} else if (horaAgora >= 18 && horaAgora <= 23) {
    saudacao.textContent = "Boa noite"
} else {
    saudacao.textContent = "Erro ao encontrar horário"
}

fotoPratoDestaque.alt = `Destaque do dia: ${fotoPratoDestaque.alt}`

titulo.style.fontWeight = 800

cardDestaque.classList.add("em-promocao")
