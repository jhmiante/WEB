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



console.log("Estrutura de Repetição FOR")

var cont;

for (cont = 1; cont <= 10 ; cont++)
	{
		console.log("Repetição Número: " + cont + "/10");
	}




console.log("Estrutura de Repetição WHILE")

var contarFim = 10;
var cont = 1;

while (cont <= contarFim)
	{
	console.log("Repetição While Número:" + cont + "/" + contarFim);
	cont++;
	}



console.log("CRIANDO VETORES EM JAVASCRIPT")

//vetor sem tamanho definido
var vetor1 = new Array();

//vetor com tamanho definido
var vetor2=new Array(3);

//vetor com posições e valores definidos
var vetor3=new Array("maça","banana","morango");

//vetor – declaração abreviada
var vetor4 = ["limão", "pera", "uva", "kiwi"];


var frutas = new Array();
 
 frutas[0]="maça";
 frutas[1]="banana";
 frutas[2]="morango";

 console.log(frutas[2]);

console.log("REPETIÇÃO COM VETOR - 	REPETIÇÃO COM VALOR FIXO")

for (var i = 0; i <= 2; i++) 
	{
	 	console.log(frutas[i])
	}



console.log("REPETIÇÃO COM VETOR - 	REPETIÇÃO COM TAMANHO DO VETOR")

for (var i = 0; i < frutas.length; i++) 
	{
	 	console.log(frutas[i])
	}