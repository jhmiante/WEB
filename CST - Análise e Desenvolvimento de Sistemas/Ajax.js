
//Abaixo, funções que são acionadas através do id.
$(document).ready(function(){
	$("#button1").click(gravarCookie);
	$("#button2").click(carregarCookie);
	$("#button3").click(function(){
		apagarCookie();
	});
});

// A sintaxe abaixo demonstra os comandos para registrar as informações em cookies.
function gravarCookie(){
	$.cookie("rgm",$("#rgm").val(),{expires: 5});
	$.cookie("nome",$("#nome").val(),{expires: 5});
	$.cookie("profissao",$("#profissao").val(),{expires: 5});
	$.cookie("cpf",$("#cpf").val(),{expires: 5});
	alert("Dados Gravados!");
	limparCampos();
}

//A sintaxe abaixo demonstra os comandos para recuperar as informações em cookies e alimentar os elementos html.
function carregarCookie(){
	if($.cookie("rgm") != null)	{
		$("#rgm").val($.cookie("rgm"));
		$("#nome").val($.cookie("nome"));
		$("#profissao").val($.cookie("profissao"));
		$("#cpf").val($.cookie("cpf"));
	} else{
		alert("Nenhum Cookie Encontrado!")
	}
}

//A sintaxe abaixo demonstra os comandos para deletar as informações dos cookies.
function apagarCookie(){
	if ($.cookie("rgm") != null) {
		$.removeCookie("rgm");
		$.removeCookie("nome");
		$.removeCookie("profissao");
		$.removeCookie("cpf");
	} else{
		alert("Nenhum Cookie Encontrado!")
	}
}

//A sintaxe abaixo demonstra os comandos para limpar as informações dos elementos html.
function limparCampos(){
	$("#rgm").val("");
	$("#nome").val("");
	$("#profissao").val("");
	$("#cpf").val("");
}




//LOCALSTORAGE

//Abaixo, funções que são acionadas através do id.
$(document).ready(function(){
	$("#button4").click(gravarDados);
	$("#button5").click(carregarDados);
	$("#button6").click(function(){
		apagarDados();
	});
});

// A sintaxe abaixo demonstra os comandos para registrar as informações em localStorage.
function gravarDados(){
	localStorage.setItem("rgm2",$("#rgm2").val());
	localStorage.setItem("nome2",$("#nome2").val());
	localStorage.setItem("profissao2",$("#profissao2").val());
	localStorage.setItem("cpf2",$("#cpf2").val());
	alert("Dados Gravados!");
	limparDados();
}

//A sintaxe abaixo demonstra os comandos para recuperar as informações em localStorage e alimentar os elementos html.
function carregarDados(){
	if(localStorage.length > 0)	{
		$("#rgm2").val(localStorage.getItem("rgm2"));
		$("#nome2").val(localStorage.getItem("nome2"));
		$("#profissao2").val(localStorage.getItem("profissao2"));
		$("#cpf2").val(localStorage.getItem("cpf2"));
	}
	else{
		alert("Nenhum Cookie Encontrado!")
	}
}

//A sintaxe abaixo demonstra os comandos para deletar as informações dos localStorage.
function apagarDados(){
	if (localStorage.length > 0) {
		localStorage.clear();
	} 
	else{
		alert("Nenhum Cookie Encontrado!")
	}
	limparCampos();
}

//A sintaxe abaixo demonstra os comandos para limpar as informações dos elementos html.
function limparDados(){
	$("#rgm2").val("");
	$("#nome2").val("");
	$("#profissao2").val("");
	$("#cpf2").val("");
}



function loadXMLDoc(){
 	if (window.XMLHttpRequest)
 	{
 		// code for IE7+, Firefox, Chrome, Opera, Safari
 		xmlhttp=new XMLHttpRequest();
 	}
 	else
 	{
 		// code for IE6, IE5
 		xmlhttp=new ActiveXObject(“Microsoft.XMLHTTP”);
 	}

 	xmlhttp.onreadystatechange=function()
 		{
 			if (xmlhttp.readyState==4 && xmlhttp.status==200)
 				{
 					//código de retorno aqui;
 				}
 		}
 	xmlhttp.open(“GET”,url,true);
 	xmlhttp.send();
}


$(function(){
	$("#enviar").click(function(){
		$.ajax({
			type: 'post',
			data: 'rgm=' + $('#rgm').val() + '&nome=' + $('#nome').val() + '&profissao=' + $('#profissao').val() + '&cpf=' + $('#cpf').val(),
			url:'info.php',
			success: function(retorno){
				$('#resposta').html(retorno);
			}
		})
	})
})


$.ajax({
	
 	url : ‘info.php’,
 	type : ‘post’,
 	data : {‘aluno’:’Prof. Gobbato’, ‘email’: ‘professorgobbato@yahoo.com.br’},
 	dataType: ‘html’,
 	username: ‘professor’,
 	password: ‘123456’,

 	beforeSend: function(){
 		$(‘#carregando’).fadeIn();
 	},

 	timeout: 3000,

 	success: function(retorno){
 		$(‘#resposta’).html(retorno);
 	},

 	error: function(erro){
 		$(‘#resposta’).html(erro);
 	}

 })