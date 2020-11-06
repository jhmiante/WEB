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

console.log("Condicional IF ... ELSE IF ... ELSE")

var data = new Date()
var hora = data.getHours()

if (hora < 12 ) 
	{
		console.log("Bom dia!!!")
	}
	else if (hora < 18)
	{
		console.log("Boa tarde!!!")
	}
	else
	{
		console.log("Boa Noite!!!")
	}


console.log("Condicional SWITCH CASE")

var Data = new Date();
var diaDaSemana = Data.getDay(); //Retorna o dia da semana, sendo 0 Domingo - 1 Segunda - 2 Terça ... 6 Sábado

switch (diaDaSemana)
	{
		case 0:
			console.log("Domingo de descanso merecido :)")
			break

		case 5:
			console.log("Opa... Sextou U.u")
			break

		case 6:
			console.log("Que maravilha... Sabadão chegou :p")
			break

		default:
			console.log("Semana Longaaaaaaaa....")
	}

