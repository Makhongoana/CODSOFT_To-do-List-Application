function addTask() {

  var taskInput = document.getElementById('taskInput');

  var taskDate = document.getElementById('taskDate');

  var taskList = document.getElementById('taskList');

  

  if(taskInput.value.trim() === '') {

    alert('Please enter a task');

  } else {

    var li = document.createElement('li');

    var taskText = document.createElement('span');

    taskText.textContent = taskInput.value + ' - ' + taskDate.value;

    li.appendChild(taskText);

    

    var deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';

    deleteButton.className = 'delete';

    deleteButton.onclick = function() {

      li.remove();

    };

    

    var toggleButton = document.createElement('button');

    toggleButton.textContent = 'Done';

    toggleButton.onclick = function() {

      taskText.style.textDecoration = (taskText.style.textDecoration === 'line-through') ? 'none' : 'line-through';

    };

    var editButton = document.createElement('button');

    editButton.textContent = 'Edit';

    editButton.onclick = function() {

      var newText = prompt('Edit task:', taskText.textContent);

      if (newText !== null) {

        taskText.textContent = newText;

      }

    };

    

    li.appendChild(deleteButton);

    li.appendChild(toggleButton);

    li.appendChild(editButton);

    taskList.appendChild(li);

    

    taskInput.value = '';

    taskDate.value = '';

  }

}