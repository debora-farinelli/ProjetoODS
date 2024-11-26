"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelectorAll(".item")

    botao.forEach(botao => {
        botao.addEventListener("mouseover", function() {
            botao.style.backgroundColor = "#FE5359"
        })

        botao.addEventListener("mouseout", function() {
            botao.style.backgroundColor = "#f5a5a5"
        })

        botao.addEventListener("click", function() {
            botao.style.backgroundColor = "blue"
        })

        botao.addEventListener("mousedown", function() {
            botao.style.backgroundColor = "blue"
        })

     })
})

document.addEventListener("DOMContentLoaded", function() {
    let submitDoacao = document.querySelector("#submitDoacao")

    submitDoacao.addEventListener("mouseover", function() {
        submitDoacao.style.backgroundColor = "blue"
        submitDoacao.style.color = "white"

        submitDoacao.addEventListener("mouseout", function() {
            submitDoacao.style.backgroundColor = "white"
            submitDoacao.style.color = "black"
        })

        submitDoacao.addEventListener("mousedown", function() {
            submitDoacao.style.backgroundColor = "green"
            submitDoacao.style.color = "white"
        })

        submitDoacao.form.addEventListener("submit", function(event) {
            event.preventDefault()
            redirecionar()
        })
        
    })
})

function redirecionar() {
    window.location.href='../doacao/indexEnviar.html'
}

document.addEventListener("DOMContentLoaded", function() {
    let itemHistorico = document.querySelector(".itemHistorico")

    itemHistorico.addEventListener("mouseover", function() {
        itemHistorico.style.backgroundColor = "lightgreen"
    })

    itemHistorico.addEventListener("mouseout", function() {
        itemHistorico.style.backgroundColor = "#28a745"
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let animacao = document.querySelector(".right-content")

    animacao.addEventListener("mouseout", function() {
        animacao.style.backgroundColor = "#ffeef1"
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let animacaoTabela = documento.querySelector(".tr")

    animacaoTabela.addEventListener("mouseover", function() {
        animacaoTabela.style.backgroundColor = "#f2f2f2;"
    })

    animacaoTabela.addEventListener("mouseout", function() {
        animacaoTabela.style.backgroundColor = "white"
    })
})