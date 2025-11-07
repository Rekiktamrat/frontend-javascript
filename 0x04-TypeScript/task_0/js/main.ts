
// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: "Rekik",
  lastName: "Tamrat",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Blessing",
  lastName: "Olagbegi",
  age: 23,
  location: "Lagos",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render a table with Vanilla JS
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headers = ["First Name", "Location"];

// Create header row
headers.forEach((headerText) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = headerText;
  headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
