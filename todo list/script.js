// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const toDoList = document.getElementById('toDoList');

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get input value and remove extra spaces
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li)
    const listItem = document.createElement('li');

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a span for the timestamp
    const timestampSpan = document.createElement('span');
    const currentTime = new Date();
    timestampSpan.textContent = formatTime(currentTime);
    timestampSpan.className = 'timestamp';

    // Add click event to remove the task
    listItem.addEventListener('click', () => {
        if (confirm('Do you want to remove this task?')) {
            toDoList.removeChild(listItem);
        }
    });

    // Append text and timestamp to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(timestampSpan);

    // Append the list item to the to-do list
    toDoList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});

// Helper function to format the timestamp
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
