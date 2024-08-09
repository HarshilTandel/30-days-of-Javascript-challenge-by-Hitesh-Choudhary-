document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    // Load tasks from localStorage
    loadTasks();

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    function addTask(text, completed = false) {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        if (completed) {
            listItem.classList.add('completed');
        }

        listItem.innerHTML = `
            <span>${text}</span>
            <div class="buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="complete-btn">${completed ? 'Undo' : 'Complete'}</button>
            </div>
        `;

        // Attach event listeners to buttons
        listItem.querySelector('.edit-btn').addEventListener('click', () => editTask(listItem));
        listItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(listItem));
        listItem.querySelector('.complete-btn').addEventListener('click', () => toggleComplete(listItem));

        // Append to the appropriate list
        if (completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }

        // Add fade-in effect
        setTimeout(() => {
            listItem.style.opacity = 1;
        }, 100);
    }

    function editTask(listItem) {
        const newText = prompt('Edit task:', listItem.querySelector('span').textContent);
        if (newText !== null) {
            listItem.querySelector('span').textContent = newText;
            saveTasks();
        }
    }

    function deleteTask(listItem) {
        listItem.style.opacity = 0;
        setTimeout(() => {
            listItem.remove();
            saveTasks();
        }, 300); // Match the duration of the fade-out effect
    }

    function toggleComplete(listItem) {
        const isCompleted = listItem.classList.contains('completed');
        listItem.classList.toggle('completed');
        listItem.querySelector('.complete-btn').textContent = isCompleted ? 'Complete' : 'Undo';
        if (isCompleted) {
            pendingTasksList.appendChild(listItem);
        } else {
            completedTasksList.appendChild(listItem);
        }
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#pendingTasks .task-item').forEach(item => {
            tasks.push({ text: item.querySelector('span').textContent, completed: false });
        });
        document.querySelectorAll('#completedTasks .task-item').forEach(item => {
            tasks.push({ text: item.querySelector('span').textContent, completed: true });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTask(task.text, task.completed);
        });
    }
});
