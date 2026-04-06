interface Student {
    name:string;
    age:number;
    gpa:number;
}
const Students:Student[]=[];
function addStudent(){
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const gpaInput = document.getElementById('gpa') as HTMLInputElement;
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const gpa = parseFloat(gpaInput.value);
    if(name && !isNaN(age)&&!isNaN(gpa)){
        const student:Student = {name,age,gpa};
        Students.push(student);
        sortStudents();
        checkLowGPA();
    }
    else{
        alert('Please fill in all fields correctly.');
    }
}
    function sortStudents(){
        const sortOrder = (document.getElementById('sortOrder') as HTMLSelectElement).value;
    let sortedStudents:Student[];
    if(sortOrder === 'gpa'){
        sortedStudents = Students.sort((a,b) => b.gpa - a.age);
    }else{
        sortedStudents = Students.sort((a,b)=>a.name.localeCompare(b.name));
    }
    displayStudents(sortedStudents);
}
function displayStudents(students:Student[]){
const results = document.getElementById('results') as HTMLTextAreaElement;
results.value = `Name\tAge\tGPA\n`;
students.forEach(student => {
results.value+=`${student.name}\t${student.age}\t${student.gpa.toFixed(2)}\n`;
});
}
function checkLowGPA(){
    const lowGPAStudents = Students.filter(student => student.gpa < 2);
    if(lowGPAStudents.length>3){
        alert('Warning:More than 3 students have a GPA less than 2.');
    }
}