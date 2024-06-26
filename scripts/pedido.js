const prato = document.querySelectorAll('.prato')
const bebida = document.querySelectorAll('.bebida')
const sobremesa = document.querySelectorAll('.sobremesa')

let pedidoprato = ""
let valorprato = ""
let pedidobebida = ""
let valorbebida = ""
let pedidosobremesa = ""
let valorsobremesa = ""



for (i = 0; i < prato.length; i++) {
  console.log(prato[i].classList)
  prato[i].classList.remove('ativado')
  prato[i].addEventListener('click', function (e) {
    escolhePrato(this)
  })

}
function escolhePrato(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidoprato = ""
    valorprato = ""
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
    console.log(pedidoprato, valorprato)
  }
}

//bebida
for (i = 0; i < bebida.length; i++) {
  console.log(bebida[i].classList)
  bebida[i].classList.remove('ativado')
  bebida[i].addEventListener('click', function (e) {
    escolhebebida(this)
  })

}
function escolhebebida(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidobebida = ""
    valorbebida = ""
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
    console.log(pedidobebida, valorbebida)
  }
}

//sobremesa
for (i = 0; i < sobremesa.length; i++) {
  console.log(sobremesa[i].classList)
  sobremesa[i].classList.remove('ativado')
  sobremesa[i].addEventListener('click', function (e) {
    escolhesobremesa(this)
  })

}
function escolhesobremesa(elemento) {

  if (elemento.classList.contains('ativado')) {

    elemento.classList.remove('ativado')
    elemento.classList.remove('ok')
    pedidosobremesa = ""
    valorsobremesa = ""
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
    console.log(pedidosobremesa, valorsobremesa)
  }
}