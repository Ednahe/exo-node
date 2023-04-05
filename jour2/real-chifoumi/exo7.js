const u = require('./utils');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  var score1 = 0;
  var score2 = 0;
  
  rl.setPrompt("Pierre, feuille, ciseaux > ");
  rl.prompt();
  
  rl.on("line", (line) => {
    let gagnant = u.play(line.trim().toLowerCase());
    if(gagnant === 1){
      score1++;
      console.log("Player 1 win");
    }
    if(gagnant === 2){
      score2++;
      console.log("Player 2 win");
    }
    console.log("player 1 : " + score1 + " | player 2 : " + score2);
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0); // arrêt du processus
  });