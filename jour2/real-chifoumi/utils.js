require('dotenv').config();

exports.play = function(joueur1) {
    const coups = ["pierre", "feuille", "ciseaux"];
    var ok = false;
    coups.forEach(e => {
        if(e === joueur1){
            ok = true;
        }
    })
    let joueur2 = coups[Math.floor(Math.random()*3)];
    console.log("Player 1 : " + joueur1);
    console.log("Player 2 : " + joueur2);
    if(!ok || joueur1 == joueur2){
        return 0;
    } else if((joueur1 == "pierre" && joueur2 == "feuille") || (joueur1 == "feuille" && joueur2 == "ciseaux") || (joueur1 == "ciseaux" && joueur2 == "pierre")){
        return 2;
    } else {
        return 1;
    }
};