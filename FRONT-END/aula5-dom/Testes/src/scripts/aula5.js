const tituloPython = document.querySelector('#card-py h3')  // POR ID
const titulosCards = document.querySelectorAll('.card h3')  // POR CLASSE
const terceiroCard = document.querySelector('.card:nth-child(3)') // POR FILHO

console.log("1- Título Python: ", tituloPython)
console.log("2- Todos os títulos: ", titulosCards)
console.log("3- Terceiro card: ", terceiroCard)



const siteOficial = document.querySelector('a[href="siteoficial.com.br"]')  // POR ATRIBUTO
const textoCapturadoPython = tituloPython.textContent  // TEXTO DA TAG
const htmlCapturadoPython = tituloPython.innerHTML  // TEXTO DA TAG COM ELEMENTOS HTML (strong)

console.log("4- Site oficial: ", siteOficial)
console.log("5- Título capturado: ", textoCapturadoPython)



const boasVindas = document.querySelector("#boas-vindas")
const agora = new Date()
const hora = agora.getHours()

boasVindas.innerHTML = hora > 18 ? "Boa <strong><span id='noite'>noite!<span></strong>" : hora > 1 ? "Boa <strong><span id='tarde'>tarde!<span></strong>" : "Bom <strong><span id='dia'>dia<span></strong>!"



siteOficial.href = "siteoficial.net"  //  MUDANDO ATRIBUTO DE UMA TAG

console.log(siteOficial.href)