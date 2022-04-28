const games = [
    {
        id: 1,
        nome: "Infamous Second Son",
        gênero: "Acao e Aventura",
        estilo:"Openworld",
        classificação: 16,
        produtora:"Sucker Punch Productions",
        jogou: true,
        recomendo: true,
    },
    {
        id: 2,
        nome: "Marvel's Spider-Man: Game of The Year Edition ",
        gênero: "Acao e Aventura",
        estilo: "Openworld",
        classificação: 12,
        produtora:" Insomniac Games",
        jogou: true,
        recomendo: true,
    },    
    {
        id: 3,
        nome: "Minecraft",
        gênero: "Sobrevivencia",
        estilo: "Sandbox",
        classificação: 16,
        produtora:"Sucker Punch Productions",
        jogou: false,
        recomendo: false,
    },    
    {
        id: 4,
        nome: "Street Fighter V",
        gênero: "Luta",
        estilo: "Treino, História, Survival e Network Battle",
        classificação: 12,
        produtora:"Capcom / Dimps",
        jogou: true,
        recomendo: true,
    },    
    {
        id: 5,
        nome: "Call of Duty: Vanguard",
        gênero: "Tiro",
        estilo: "primeira pessoa",
        classificação: 18,
        produtora:"Sledgehammer Games ",
        jogou: false,
        recomendo: true,
    },    
    {
        id: 6,
        nome: "Grand Theft Auto V",
        gênero: "Acao e Aventura",
        estilo: "Openworld", 
        classificação: 18,
        produtora:" Rockstar North",
        jogou: true,
        recomendo: true,
    },
    {
        id: 7,
        nome: "Need for Speed: Hot Pursuit - Remastered",
        gênero: "Corrida",
        estilo: "Arcade",
        classificação: "Livre",
        produtora:"Criterion Games",
        jogou: true,
        recomendo: true,
    }

    
]

/*for(let i = 0; i < games.length; i ++) {
    const jogos = games[i];
    console.log(jogos.gênero);
};*/

/*games.forEach((jogos,index) => {
    console.log(`${index} - ${jogos.nome} : ${jogos.gênero}`);
});*/


//console.log(games [3]);


module.exports = games