// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Criando Banco de Dados
var loki = require('lokijs');
var db = new loki('db.json');

// Criando tabela
var tbl_musicas = db.addCollection('tbl_musicas');
// Iniciando Banco de Dados
function ready(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded',fn);
	}
}

// Capiturando as informações digitadas no formulario
ready(function () {
	document.querySelector('#gravar').addEventListener('click', function (e) {
		e.preventDefault();
		let data = {
			musica: document.querySelector('#musica').value,
			artista: document.querySelector('#artista').value,
			vocalista: document.querySelector('#vocalista').value,
			vocalista: document.querySelector('#vocalista2').value,
			tom: document.querySelector('#tom').value,
			slide: document.querySelector('#slide').value
		};
		// inserindo na tabela
		tbl_musicas.insert(data);
		db.save()
		alert('Salvo com Sucesso!');
		document.querySelector('#cadastroMusicas').reset()
	})
})
