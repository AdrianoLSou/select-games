const games = require('./database')
//console.log(games);

//Pegar o input para as pessoas usuárias:
//Para poder usar tudo o que a biblioteca disponibiliza, usando a palavra por mim escolhida: readline:
const readline = require('readline-sync')

//'question' é uma propriedade nativa da readline para fazer-mos perguntas para receber a entrada da pessoa usuária. 
const entradaInicial = readline.question('Escolher um game? S/N ')

//Se for sim, mostrar os gêneros disponíveis e perguntar qual ela escolhe;
//Se for não, mostrar todos os games em ordem crescente de classificação.
if (entradaInicial.toLocaleUpperCase()==='S') {
    console.log('Estes são os gêneros disponíveis:')
    console.log('Acao e Aventura |', ' Corrida |', ' Luta |', ' Sobrevivencia |', ' Tiro')

    const entradaDoGenero = readline.question('Escolha um genero:')

    const retorno = games.filter(games => games.gênero === entradaDoGenero)

    console.table(retorno)
} else {
    const gamesOrdenados = games.sort((a,b) => a.classificação - b.classificação)
    console.log('Estes são todos os games disponíveis')
    console.table(gamesOrdenados)
}

