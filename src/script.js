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
];
