var Students = [];
function addStudent() {
    var nameInput = document.getElementById('name');
    var ageInput = document.getElementById('age');
    var gpaInput = document.getElementById('gpa');
    var name = nameInput.value.trim();
    var age = parseInt(ageInput.value);
    var gpa = parseFloat(gpaInput.value);
    if (name && !isNaN(age) && !isNaN(gpa)) {
        var student = { name: name, age: age, gpa: gpa };
        Students.push(student);
        sortStudents();
        checkLowGPA();
    }
    else {
        alert('Please fill in all fields correctly.');
    }
}
function sortStudents() {
    var sortOrder = document.getElementById('sortOrder').value;
    var sortedStudents;
    if (sortOrder === 'gpa') {
        sortedStudents = Students.sort(function (a, b) { return b.gpa - a.age; });
    }
    else {
        sortedStudents = Students.sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    displayStudents(sortedStudents);
}
function displayStudents(students) {
    var results = document.getElementById('results');
    results.value = "Name\tAge\tGPA\n";
    students.forEach(function (student) {
        results.value += "".concat(student.name, "\t").concat(student.age, "\t").concat(student.gpa.toFixed(2), "\n");
    });
}
function checkLowGPA() {
    var lowGPAStudents = Students.filter(function (student) { return student.gpa < 2; });
    if (lowGPAStudents.length > 3) {
        alert('Warning:More than 3 students have a GPA less than 2.');
    }
}
