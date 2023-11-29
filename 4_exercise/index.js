class Person {
    constructor(name, email) {
        this.name = name;
        this.email = name;
    }
}

class Lecturer extends Person {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber
    }
}


class Student extends Person {
    constructor(name, email, studentNumber) {
        super(name, email);
        this.studentNumber = studentNumber;
    }
}



// Function to add a new Lecturer
function addLecturer() {
    const name = $('#lecturerName').val();
    const email = $('#lecturerEmail').val();
    const officeNumber = $('#officeNumber').val();

    const lecturer = new Lecturer(name, email, officeNumber);
    addToTable(lecturer, 'lecturerTable');
    clearForm('lecturerForm');
}

// Function to add a new Student
function addStudent() {
    const name = $('#studentName').val();
    const email = $('#studentEmail').val();
    const studentNumber = $('#studentNumber').val();

    const student = new Student(name, email, studentNumber);
    addToTable(student, 'studentTable');
    clearForm('studentForm');
}

// Function to add a new row to the table
function addToTable(person, tableId) {
    const table = $('#' + tableId);
    const row = $('<tr>');
    row.append('<td>' + person.name + '</td>');
    row.append('<td>' + person.email + '</td>');

    // Check if the person is a Lecturer or Student
    if (person instanceof Lecturer) {
        row.append('<td>' + person.officeNumber + '</td>');
    } else if (person instanceof Student) {
        row.append('<td>' + person.studentNumber + '</td>');
    }

    table.append(row);
}

// Function to clear the form
function clearForm(formId) {
    $('#' + formId)[0].reset();
}