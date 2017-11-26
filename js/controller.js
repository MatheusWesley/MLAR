$(document).ready(function(){

	const app = require('electron').remote.app;
	const {remote} = require('electron');

	// IMPLEMTENTANDO BOTÕES FECHA, MAXIMIZAR E MINIMIZAR
	// FECHAR
	$('.btnCancel').click(function() {
		var certeza = confirm('Tem certeza que quer sair?');
		if (certeza == true) {
			console.log('Sair');
			remote.BrowserWindow.getFocusedWindow().close();
		}else {
			console.log('não fechar sistema!');
		}
	});

	// MAXIMIZAR
	$('#btnPlus').click(function(){
		//console.log("Maximizar");
		if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
			remote.BrowserWindow.getFocusedWindow().restore();

		}else{
			remote.BrowserWindow.getFocusedWindow().maximize();
		}

	});

	// MINIMIZAR
	$('#btnMinus').click(function(){
		//console.log("Minimizar");
		remote.BrowserWindow.getFocusedWindow().minimize();
	});

});
