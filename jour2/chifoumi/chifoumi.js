const CHOICES = ["pierre", "feuille", "ciseaux"];

/**
 * Joue un tour de Chifoumi.
 * @param {string} player1Choice Le choix du joueur 1.
 * @param {string} player2Choice Le choix du joueur 2.
 * @returns {number} 0 si match nul, 1 si le joueur 1 gagne, 2 si le joueur 2 gagne.
 */
const playRound = (player1Choice, player2Choice) => {
  // Vérifie si c'est un match nul
  if (player1Choice === player2Choice) {
    return 0;
  }

  // Vérifie qui gagne
  if (
    (player1Choice === "pierre" && player2Choice === "ciseaux") ||
    (player1Choice === "feuille" && player2Choice === "pierre") ||
    (player1Choice === "ciseaux" && player2Choice === "feuille")
  ) {
    return 1;
  } else {
    return 2;
  }
}

module.exports = { CHOICES, playRound };