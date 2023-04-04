let readLine = require('readline')

rl = readLine.createInterface(process.stdin, process.stdout)

const students = ["Alan", "Sonia", "Sophie"];
let foundStudent = null;

rl.setPrompt('Entrez un nom > ')
rl.prompt()

rl.on('line', function(line) {
    // switch(line.trim()) {
    //     case 'Hello': console.log('world !');
    //         break;
    //     case 'quoi': console.log('feur');
    //     break;
    // default: console.log('Say what ? I might have heard `' + line.trim() + '`');
    //         break;
    const trimmedLine = line.trim().toLowerCase()
    if (students.includes(trimmedLine)) {
        foundStudent = students.find(student => student.toLowerCase() === trimmedLine);
        rl.close();
    } else {
        console.log('Etudiant non trouvé. Réessayez.');
        rl.prompt();
    }
}).on('close', function() {
    console.log('Have a great day !');
    process.exit(0)
})