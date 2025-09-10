// Define the time slots for the timetable
const timeSlots = [
  "8:00 - 9:00",
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 1:00",
  "1:00 - 2:00",
  "2:00 - 3:00",
  "3:00 - 4:00"
];

// Get the table body
const tbody = document.querySelector('#timetable tbody');

// Loop through time slots and create rows
timeSlots.forEach(time => {
  const row = document.createElement('tr');

  // Create the time column
  const timeCell = document.createElement('td');
  timeCell.textContent = time;
  timeCell.classList.add('time-col');
  row.appendChild(timeCell);

  // Create 5 columns for Monday to Friday
  for (let i = 0; i < 5; i++) {
    const cell = document.createElement('td');
    cell.contentEditable = true; // make the cell editable
    cell.addEventListener('input', () => {
      cell.classList.add('editable'); // add a visual cue when edited
    });
    row.appendChild(cell);
  }

  tbody.appendChild(row);
});
