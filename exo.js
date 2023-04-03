const fs = require('fs')

// Méthode asynchrone
fs.readFile('students.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

// Méthode synchrone 
try {
    const data = fs.readFileSync('students.txt', 'utf-8');
    console.log(data);
} catch (err) {
  console.error(err);
}

// Exo 2
try {
  const data = fs.readFileSync('students.txt', 'utf-8');
  const students = data.split('\n').map(line => {
    const [note, name, address] = line.trim().split(' ');
    return {
      name,
      note: parseInt(note),
      address
    };
  });

  const topStudents = students.filter(student => {
    return student.note > 17;
  });

  console.log(topStudents);
} catch (err) {
  console.error(err);
}

// Exo 3
try {
  const data = fs.readFileSync('students.txt', 'utf-8');
  const lines = data.split('\n');
  lines.shift();

  const students = lines.map(line => {
    const [note, name, address] = line.trim().split(' ');
    return {
      name,
      note: parseInt(note),
      address
    };
  });

  const bestStudent = students.reduce((best, current) => {
    return current.note > best.note ? current : best;
  });

  console.log(bestStudent);
} catch (err) {
  console.error(err);
}

// Exo 4
try {
  const data = fs.readFileSync('students.txt', 'utf-8');
  const lines = data.trim().split('\n');
  const header = lines.shift(); 
  const students = [];

  for (const line of lines) {
    const [note, name, address] = line.trim().split(' ');
    const student = { name, note: parseInt(note), address };
    students.push(student);
}

console.log(students);

// Exo 5
students.sort((a, b) => {
  return a.note - b.note;
});  
console.log(students);

} catch (err) {
  console.error(err);
}

// Exo 6
fs.appendFileSync('students.txt', '18 Sonia Paris\n', 'utf-8');

fs.appendFileSync('students.txt', '17 Clarisse Marseille\n', 'utf-8');

console.log('Les étudiants ont été ajoutés avec succès !');

// Exo 7
fs.readFile('students.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim().split('\n');
  const students = lines.map((line) => {
    const [note, name, address] = line.trim().split(' ');
    return { note: parseInt(note), name: name.toUpperCase(), address };
  });
  
  console.log(students);
});