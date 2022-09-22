let tam = 2 
let titulo 
for (i = 1; i < 7; i++) {
    titulo = document.querySelector(`h${i}`) 
    if (titulo != null) {
        f_criaBotao() 
        break
    }
} 

function f_criaBotao() {
    const botaoMais = document.createElement(null) 
    botaoMais.innerHTML = `<button id="botaomais"> + </button>` 
    botaoMais.style.borderRadius = '10px'
    botaoMais.style.width = '30px'

    const botaoMenos = document.createElement(null) 
    botaoMenos.innerHTML = `<button id="botaomenos"> - </button>`
    botaoMenos.style.borderRadius = '10px'
    botaoMenos.style.width = '30px'
    botaoMenos.style.marginLeft = '20px'

    const br = document.createElement('br') 

    titulo.parentNode.insertBefore(br, titulo.nextSibling)
    titulo.parentNode.insertBefore(botaoMenos, titulo.nextSibling)
    titulo.parentNode.insertBefore(botaoMais, titulo.nextSibling)

    botaoMais.addEventListener('click', function() {
        if (tam < 6) {
            tam += 0.5
        } 
        titulo.style.fontSize = `${tam}em`
    })
    botaoMenos.addEventListener('click', function() { 
        if (tam > 1) {
            tam -= 0.5
        }
        titulo.style.fontSize = `${tam}em`
    })
} 
