
let titulo
let tamanho = 2
for (let i = 1; i < 7; i++) {
  titulo = document.querySelector(`h${i}`)
  if (titulo != null) {
    criarbotao()
    break
  }
}
function criarbotao() {
  const botaoAumentar = document.createElement(null)
  botaoAumentar.innerHTML = `<button type='button' onclick="clicou('mais')" id='botao'>+</button>`

  const botaoDiminuir = document.createElement(null)
  botaoDiminuir.textContent = "-"
  botaoDiminuir.innerHTML = `<button type='button' onclick="clicou('menos')" id='botao'>-</button>`

  const br = document.createElement("br")
  titulo.parentNode.insertBefore(br, titulo.nextSibling)
  titulo.parentNode.insertBefore(botaoDiminuir, titulo.nextSibling)
  titulo.parentNode.insertBefore(botaoAumentar, titulo.nextSibling)
  
  const botao = document.querySelectorAll('#botao')
  for(let i = 0; i < 2; i++){
    botao[i].style.borderRadius = '10px'
    botao[i].style.width = '30px'
    botao[1].style.marginLeft = '20px'
  }
}
function clicou(btn) {
  if (btn == "mais" && tamanho < 6) {
    tamanho += 0.5
  } else if(btn == 'menos' && tamanho > 1) {
    tamanho -= 0.5
  }
  titulo.style.fontSize = `${tamanho}em`
}
