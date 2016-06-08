$(document).ready(function() {
	contenidoChat = $('#chat').html();
})

$('#inputMensaje').keypress(function(e){
	if (e.which === 13){
		capturarTexto();
	}
})

function capturarTexto() {
	var texto = introducirTexto();
	if (texto !== ''){
		claseNueva();
		mostrarMensaje(texto);
		inputMensaje.value = '';
		inputMensaje.focus();
	}
}

function introducirTexto() {
	var inputMensaje = document.getElementById('inputMensaje');
	return inputMensaje.value;
}

function mostrarMensaje(mostrar) {
	var chat = document.getElementById('chat');
	var filaMensaje = document.createElement('div');
	filaMensaje.className = 'row sinmargin';
	filaMensaje.id = 'filaMensaje'+cuenta+idChat;
	chat.appendChild(filaMensaje);
	
	var cajaMensaje = document.createElement('div');
	cajaMensaje.className = 'enviados';
	cajaMensaje.id = 'enviados'+cuenta+idChat;
	document.getElementById('filaMensaje'+cuenta+idChat).appendChild(cajaMensaje);

	var textoEnviado = document.createElement('p');
	textoEnviado.className = 'texto';
	textoEnviado.id = 'textoEnviado'+cuenta+idChat;
	textoEnviado.innerHTML = mostrar;
	document.getElementById('enviados'+cuenta+idChat).appendChild(textoEnviado);

	var horaMensaje = document.createElement('p');
	horaMensaje.className = 'hora-mensaje';
	horaMensaje.id = 'horaMensaje'+cuenta+idChat;
	horaMensaje.innerHTML = horaEnvio();
	document.getElementById('enviados'+cuenta+idChat).appendChild(horaMensaje);
}
function horaEnvio() {
	var data = new Date();
	var hora = data.getHours();
	hora = (hora<10)?"0"+hora:hora;
	var minutos = data.getMinutes();
	minutos = (minutos<10)?"0"+minutos:minutos;
	var horaEnvio = hora +": "+minutos;
	return horaEnvio;
}
cuenta = 0;
function claseNueva() {
	cuenta ++
	return cuenta;
}




//Cambiar entre pestañas de chat
var idChat = 'chat1'; 
$('.preview-chat').click(function(){
	idChat = $(this).attr('id');
	mostrarChat(idChat);
})

function mostrarChat(chat) {

	var integrantes = 'Ana María, Aldo, Gian, Mariana Papu, Tú';

	nombre = $('#'+chat).find('p.nombre').html();
	$('.infogrupo .nombre').html(nombre);
	var imagen = $('#'+chat).find('img');
	var ruta = imagen.attr('src');
	$('.header-chat img').attr('src', ruta);
	var mensajesAnteriores = $('#'+chat).find('span.preview').html();
	var horaEnviado = $('#'+chat).find('p.hora').html();
	if (chat !== 'chat1') {
		integrantes = ''
		$('#chat').html('');
		mostrarMensajesAnteriores(mensajesAnteriores, horaEnviado, nombre);
	} else {
		$('#chat').html(contenidoChat);
	}
	$('.integrantes').html(integrantes);
	
}
	
function mostrarMensajesAnteriores(preview, hora, usuario) {
	var chat = document.getElementById('chat');
	var fila = document.createElement('div');
	fila.className = 'row sinmargin';
	fila.id = 'fila'+idChat;
	chat.appendChild(fila);
	
	var caja = document.createElement('div');
	caja.className = 'recibidos';
	caja.id = 'recibidos'+idChat;
	document.getElementById('fila'+idChat).appendChild(caja);

	var nombreUsuario = document.createElement('p');
	nombreUsuario.className = 'contacto andrea';
	nombreUsuario.innerHTML = usuario;
	document.getElementById('recibidos'+idChat).appendChild(nombreUsuario);

	var textoPreview = document.createElement('span');
	textoPreview.className = 'texto';
	textoPreview.id = 'textoPreview'+idChat;
	textoPreview.innerHTML = preview;
	document.getElementById('recibidos'+idChat).appendChild(textoPreview);

	var horaMensaje = document.createElement('p');
	horaMensaje.className = 'hora-mensaje';
	horaMensaje.id = 'horaMensaje'+idChat;
	horaMensaje.innerHTML = hora;
	document.getElementById('recibidos'+idChat).appendChild(horaMensaje);
}
/*
$('#inputMensaje').emojiarea({
	button: '.emoticones'
});




	var nombre = $('#'+chat).find('p.nombre').html();
	//alert('el chat es de '+nombre);
	$('.infogrupo .nombre').html(nombre);
	var imagen = $('#'+chat).find('img');
	//document.getElementById('finalMensaje'+cuenta+idChat).appendChild(cajaMensaje);
	var ruta = imagen.attr('src');
	$('.header-chat img').attr('src', ruta);
	//alert('la ruta de la imagen de este chat es '+(imagen.attr('src')));
	var mensajesAnteriores = $('#'+chat).find('p.preview').html();
*/