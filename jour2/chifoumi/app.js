require('dotenv').config();
const readline = require('readline');
const { playRound, displayResults, resetGame } = require('./chifoumi');

// Création des joueurs
const player1 = {
  numero: process.env.PLAYER_1,
  name: process.env.PLAYER1_NAME,
  score: 0,
};
const player2 = {
  numero: process.env.PLAYER_2,
  name: process.env.PLAYER2_NAME,
  score: 0,
};

// Configuration de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction pour afficher les scores
const showScores = () => {
  console.log(`${player1.name}: ${player1.score} | ${player2.name}: ${player2.score}`);
};

// Fonction pour gérer une manche
const playGame = () => {

    rl.question(`${player1.name} choisit pierre, feuille ou ciseaux : `, (choice1) => {

    const choices = ["pierre", "feuille", "ciseaux"];
    let choice2 = choices[Math.floor(Math.random() * choices.length)];
    let result = playRound(choice1.toLowerCase(), choice2);
      console.log(result);
    if (result === 0) {
      console.log('Égalité !');
    } else if (result === 1) {
      console.log('coucou');
      player1.score++;
    } else if (result === 2) {
      console.log('salut');
      player2.score++;
    }

   // console.log(`joueur 2 a choisi : ${choice2}`);
   // console.log(`\n${player1.name} a joué ${choice1}`);
   // console.log(`${player2.name} a joué ${choice2}`);

   // showScores();
    if (player1.score >= 1 || player2.score >= 1) {
      displayResults(player1, player2);
      resetGame(player1, player2);
      rl.question('Voulez-vous rejouer ? (o/n) : ', (answer) => {
        if (answer.toLowerCase() === 'o') {
          playGame();
        } else {
          console.log('Merci d\'avoir joué !');
          rl.close();
        }
      });
    } else {
      playGame();
    }
  });
};

// Démarrage du jeu
console.log('Bienvenue dans le jeu du Chifoumi !');
showScores();
playGame();