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
	if($.cookie("rgm") != null)
	{
		$("#rgm").val($.cookie("rgm"));
		$("#nome").val($.cookie("nome"));
		$("#profissao").val($.cookie("profissao"));
		$("#cpf").val($.cookie("cpf"));
	}
	else
	{
		alert("Nenhum Cookie Encontrado!")
	}
}


//A sintaxe abaixo demonstra os comandos para deletar as informações dos cookies.
function apagarCookie(){
	if ($.cookie("rgm") != null) 
	{
		$.removeCookie("rgm");
		$.removeCookie("nome");
		$.removeCookie("profissao");
		$.removeCookie("cpf");
	}
	else
	{
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