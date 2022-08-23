document.addEventListener("DOMContentLoaded", f_insereSumario) 

function f_insereSumario(){
	const ol = document.createElement('ol')
	ol.id = 'sumário'
	document.body.prepend(ol)
	const secoes = document.querySelectorAll('h2')
	for(let i=0; i<secoes.length; i++) {
		const li = f_criarItem(`#sec${i+1}`, secoes[i].textContent)
		ol.appendChild(li) 
		f_alterarH2(secoes[i], i+1) 
	}
}

function f_alterarH2(elem, secnum){ 
	f_inserirNumero(elem, secnum)
	elem.id = `sec${secnum}`
	const voltar = f_criarLink('#', 'voltar') 
	f_inserirDepois(elem, voltar)
}

function f_criarItem(href, conteudo){
	const li = document.createElement('li')
	const linque = f_criarLink(href,conteudo)
	li.appendChild(linque)
	return li
}

function f_inserirNumero(elem, numero) {
	elem.textContent = `${numero}. ${elem.textContent}`
}

function f_criarLink(href, conteudo) {
	const linque = document.createElement('a') 
	linque.setAttribute('href', href) 
	linque.textContent = conteudo
	return linque 
}
	
function f_inserirDepois(de, elem) {
	const nextElem = de.nextElementSibling;
	de.parentElement.insertBefore(elem,nextElem)
}
