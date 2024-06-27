const prato = document.querySelectorAll('.prato')
const bebida = document.querySelectorAll('.bebida')
const sobremesa = document.querySelectorAll('.sobremesa')

let pedidoprato = null
let valorprato = null
let pedidobebida = null
let valorbebida = null
let pedidosobremesa = null
let valorsobremesa = null




for (i = 0; i < prato.length; i++) {

  prato[i].classList.remove('ativado')
  prato[i].addEventListener('click', function (e) {
    escolhePrato(this)
  })

}
function escolhePrato(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidoprato = null
    valorprato = null
  } else {
    for (i = 0; i < prato.length; i++) {
      prato[i].classList.remove('ativado')
      prato[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidoprato = h1element.textContent
    valorprato = h2element.textContent

  }
  verificapedido()
}

//bebida
for (i = 0; i < bebida.length; i++) {

  bebida[i].classList.remove('ativado')
  bebida[i].addEventListener('click', function (e) {
    escolhebebida(this)
  })

}
function escolhebebida(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidobebida = null
    valorbebida = null
  } else {
    for (i = 0; i < bebida.length; i++) {
      bebida[i].classList.remove('ativado')
      bebida[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidobebida = h1element.textContent
    valorbebida = h2element.textContent

  }
  verificapedido()
}

//sobremesa
for (i = 0; i < sobremesa.length; i++) {

  sobremesa[i].classList.remove('ativado')
  sobremesa[i].addEventListener('click', function (e) {
    escolhesobremesa(this)
  })

}
function escolhesobremesa(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidosobremesa = null
    valorsobremesa = null
  } else {
    for (i = 0; i < sobremesa.length; i++) {
      sobremesa[i].classList.remove('ativado')
      sobremesa[i].classList.remove('ok')
    }
    // anota o pedido na variável
    elemento.classList.add('ativado')
    elemento.classList.add('ok')
    const h1element = elemento.querySelector('h1')
    const h2element = elemento.querySelector('h2')
    pedidosobremesa = h1element.textContent
    valorsobremesa = h2element.textContent

  }
  verificapedido()
}

function verificapedido() {
  if (pedidoprato != null && valorprato != null && pedidobebida != null && valorbebida != null && pedidosobremesa != null && valorsobremesa != null) {
    fecharpedido()
  } else {
    const msgbtn = document.querySelector('button p')
    const corbtn = document.querySelector('button')
    corbtn.classList.remove('bg-green')
    corbtn.classList.remove('clicavel')
    msgbtn.innerHTML = "Selecione os 3 itens para fechar o pedido"
  }
  function fecharpedido() {
    const msgbtn = document.querySelector('footer button p')
    const corbtn = document.querySelector('footer button')
    corbtn.classList.add('bg-green')
    corbtn.classList.add('clicavel')
    msgbtn.innerHTML = "Fechar pedido"
    aguardaclique(corbtn)

  }
}

function aguardaclique(btn) {
  btn.addEventListener('click', exibepedido)
}
function exibepedido() {
  const comanda = document.querySelector('.sobreposto')
  comanda.style.display = 'flex';

}