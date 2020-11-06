console.log("Condicional IF")

var Num = 5;

if (Num > 4) 
	{
		console.log("Teste IF aceito, lendo o Bloco IF")
	}

if (Num == 10) 
	{
		console.log("Teste IF não aceito, Não irá o Bloco IF")
	}


console.log("Condicional IF ... ELSE")

var a = 5;

if (a > 4) 
	{
		console.log("Teste IF aceito, lendo o Bloco IF")
	} 
	else 
	{
		console.log("Teste IF aceito, Não irá ler o bloco Else")	
	}

if (a == 10) 
	{
		console.log("Teste IF não aceito, Não irá o Bloco IF")
	}
	else 
	{
		console.log("Teste IF não aceito, irá ler o bloco Else")	
	}


var data = new Date()
var hora = data.getHours()

if (hora < 12 ) {
	console.log("Bom dia!!!")
}else if (hora < 18){
	console.log("Boa tarde!!!")
}else{
	console.log("Boa Noite!!!")
}