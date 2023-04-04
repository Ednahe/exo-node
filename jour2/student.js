const fs = require("fs");
const readline = require("readline");
const json = JSON.parse( fs.readFileSync("./Data/students.json"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const calculMoyenne = (notes) => {
    const total = notes.reduce((acc, curr) => acc + curr, 0);
    const moyenne = total / notes.length;
    return moyenne.toFixed(2);
}

  rl.setPrompt("OHAI> ");
  rl.prompt();
  
  rl.on("line", (line) => {

    const nomEtudiant = line.trim().toLowerCase()

    if (nomEtudiant === "exit") {
        rl.close();
        return;
      }
    
    const etudiant = json.students.find((student) => student.name.toLowerCase() === nomEtudiant);

    if (etudiant) {
        const moyenne = calculMoyenne(etudiant.notes);
    
        console.log(`${etudiant.name} a une moyenne de ${moyenne}`);
      } else {
        console.log(`Etudiant non trouvé. Réessayez.`);
      }
  
    rl.prompt();
  }).on("close", () => {
    console.log("Have a great day!");
    process.exit(0);
  });