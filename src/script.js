//phone number's input mask
$("#phoneNumber").mask("(00) 00000-0000");

//array for course option
const courseArray = [
    {
        id: 1,
        course: "Angular",
    },
    {
        id: 2,
        course: "React",
    },
    {
        id: 3,
        course: "NodeJS",
    },
    {
        id: 4,
        course: "Data Analysis",
    },
];

//array for class period
const periodArray = [
    {
        id: 1,
        period: "Morning",
    },
    {
        id: 2,
        period: "Afternoon",
    },
    {
        id: 3,
        period: "Evening",
    },
];

//array of students where their data will be stored
let studentArray = [
    {
        id: 1,
        name: "Paulo de Tarso",
        email: "paulo@gmail.com",
        phoneNumber: 11654557892,
        course: 2,
        period: 1,
    },
    {
        id: 2,
        name: "Juliana Oliveira",
        email: "juliana@hotmail.com",
        phoneNumber: 11879713274,
        course: 1,
        period: 3,
    },
    {
        id: 3,
        name: "Francisco Bianchi",
        email: "bianchi@hotmail.com",
        phoneNumber: 19879768713,
        course: 3,
        period: 2,
    }
];



/* ----------------- FUNCTIONS ----------------- */

//takes ONE student data and shows it on the screen
function gets_one_student_info(student) {

    let table = document.getElementById("student-table");   //grabs the table element
    let newRow = table.insertRow();                         //inserts a new row to my table

    //inserting ID
    let newId = document.createTextNode(student.id);
    newRow.insertCell().appendChild(newId);

    //inserting name
    let newName = document.createTextNode(student.name);
    newRow.insertCell().appendChild(newName);

    //inserting email
    let newEmail = document.createTextNode(student.email);
    newRow.insertCell().appendChild(newEmail);

    //inserting phone number
    let newPhone = document.createTextNode(student.phoneNumber);
    newRow.insertCell().appendChild(newPhone);

    //inserts the matching course
    for (let j = 0; j < courseArray.length; j++) {
        if (student.course == courseArray[j].id) {
            let newCourse = document.createTextNode(courseArray[j].course);
            newRow.insertCell().appendChild(newCourse);
        }
    }

    //inserts the matching period
    for (let j = 0; j < periodArray.length; j++) {
        if (student.course == periodArray[j].id) {
            let newPeriod = document.createTextNode(periodArray[j].period);
            newRow.insertCell().appendChild(newPeriod);
        }
    }
}


//iterates the studentArray and passes each student as argument
//this will be called later, when the page is loaded
function load_all_students() {
    for (let i = 0; i < studentArray.length; i++) {
        gets_one_student_info(studentArray[i]);
    }
}

/* ----------------- Info displayed on page load ----------------- */

//load all students information to the screen
load_all_students();