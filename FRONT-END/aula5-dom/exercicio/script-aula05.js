// EXERCÍCIO 1

const nomeUsuario = document.querySelector("#nome-usuario")

nomeUsuario.textContent = "Vinícius Assunção Santos"

// EXERCÍCIO 2

const fotoPerfil = document.querySelector("#foto-perfil")

fotoPerfil.src = "https://lh3.googleusercontent.com/kZHSff9JziKb7YjsPmlSJMMGk2FpBHjWokfIa-ODaYZ-CGexlyqxO8X0Sq6b4LoshHxsEEKAr4nx-3FZgyVMa0GFeg=s155"

// EXERCÍCIO 3

const containerPerfil = document.querySelector("#container-perfil")

containerPerfil.style.backgroundColor = "aliceblue"

// EXERCÍCIO 4

const statusPerfil = document.querySelector("#badge-status")

statusPerfil.textContent = "Status: Ativo"
statusPerfil.classList.add("online")

// EXERCÍCIO 5

const qtdSkills = document.querySelectorAll(".skill").length

console.log(qtdSkills)