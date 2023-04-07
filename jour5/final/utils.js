const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);

const students = [  
    { name : "Sonia", birth : "2019-14-05"},  
    { name : "Antoine", birth : "2000-12-05"},  
    { name : "Alice", birth : "1990-14-09"},  
    { name : "Sophie", birth : "2001-10-02"},  
    { name : "Bernard", birth : "1980-21-08"},
];

const addStudent = (name, birth) => {
  students.push({ name, birth });
}

const deleteStudent = (index) => {
  students.splice(index, 1);
}

const formatBirthday = (date) => {
  return dayjs(date).locale('fr').format('LL');
}

module.exports = { students, addStudent, deleteStudent, formatBirthday };