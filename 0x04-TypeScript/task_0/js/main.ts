interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Grace',
    lastName: 'Amadi',
    age: 19,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Nyla',
    lastName: 'Williams',
    age: 21,
    location: 'Tokyo'
};

const studentsList: Student[] = [student1, student2];

// CORRECTION: Added TypeScript types for all DOM elements
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
const header1: HTMLTableCellElement = document.createElement('th');
header1.textContent = 'First Name';
const header2: HTMLTableCellElement = document.createElement('th');
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);

const tbody: HTMLTableSectionElement = table.createTBody();

// CORRECTION: Added Student type to forEach parameter
studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);