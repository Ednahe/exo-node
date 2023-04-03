const readline = require('readline');

const maxTenta = 10;
let tenta = 0;

const randomNumber = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askNumber = () => {
  if (tenta === maxTenta) {
    console.log(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre caché était ${randomNumber}.`);
    rl.close();
    return;
  }

  tenta++;

  rl.question(`Tentative ${tenta} : Devinez un nombre entre 1 et 100 : `, (answer) => {
    const userNumber = parseInt(answer);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      console.log('Veuillez entrer un nombre valide entre 1 et 100.');
      askNumber();
    } else if (userNumber === randomNumber) {
      console.log(`Bravo, vous avez deviné le nombre en ${tenta} tentatives !`);
      rl.close();
    } else if (userNumber < randomNumber) {
      console.log('Le nombre que vous avez proposé est trop petit.');
      askNumber();
    } else if (userNumber > randomNumber) {
      console.log('Le nombre que vous avez proposé est trop grand.');
      askNumber();
    }
  });
}

rl.on('close', () => {
  console.log('Merci d\'avoir joué !');
});

rl.on('error', (err) => {
  console.error('Une erreur est survenue :', err);
  rl.close();
});

askNumber();