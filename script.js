const createDaysOfTheWeek = () => {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// Escreva seu código abaixo.
const ulDays = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const li = document.createElement('li');
  li.innerText = decemberDaysList[index];
  li.className = 'day';
  ulDays.appendChild(li);

  if (index === 25 || index === 26 || index === 32) {
    li.classList.add('holiday');
  }

  if (index === 5 || index === 12 || index === 19 || index === 26) {
    li.classList.add('friday');
  }
}

const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', () => {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'lightgreen') {
      holidays[index].style.backgroundColor = 'rgb(238, 238, 238)';
    } else {
      holidays[index].style.backgroundColor = 'lightgreen';
    }
  }
});

const btnFriday = document.getElementById('btn-friday');
const fridays = document.querySelectorAll('.friday');

/* Criei um array para armazenar o estado original do innerText de cada elemento friday */
const backupFridays = [];
for (let i = 0; i < fridays.length; i += 1) {
  backupFridays.push(fridays[i].innerText);
}

btnFriday.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === 'Sextou 🎉') {
      fridays[index].innerText = backupFridays[index];
    } else {
      fridays[index].innerText = 'Sextou 🎉';
    }
  }
});

const allDays = document.querySelectorAll('.day');

for (let index = 0; index < allDays.length; index += 1) {
  allDays[index].addEventListener('mouseover', () => {
    allDays[index].style.fontSize = '30px';
  });

  allDays[index].addEventListener('mouseout', () => {
    allDays[index].style.fontSize = '';
  });
}
/* clique seleciona tarefa */
const handleSelectTask = (event) => {
  const selectedTask = document.querySelector('.selected');

  if (event.target.classList.contains('selected')) {
    // Se já está selecionado, remove
    event.target.classList.remove('selected');
  } else {
    // Se outra estiver selecionada, remove
    if (selectedTask) selectedTask.classList.remove('selected');
    event.target.classList.add('selected');
  }
};

const allTasks = document.querySelectorAll('.task');
for (let index = 0; index < allTasks.length; index += 1) {
  allTasks[index].addEventListener('click', handleSelectTask);
}

/* Atribui a tarefa ao dia */
const handleAssignTaskToDay = (event) => {
  const selectedTask = document.querySelector('.selected');
  if (event.target.style.color === selectedTask.style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)';
  } else {
    event.target.style.color = selectedTask.style.backgroundColor;
  }
};
for (let index = 0; index < allDays.length; index += 1) {
  allDays[index].addEventListener('click', handleAssignTaskToDay);
}

const addNewTask = () => {
  const taskList = document.querySelector('#task-list');
  const newTaskText = document.querySelector('#task-input');
  if (!newTaskText.value) {
    window.alert('insira um texto para a tarefa');
  } else {
    const li = document.createElement('li');
    li.innerText = newTaskText.value;
    taskList.appendChild(li);
  }
};

const btnAddNewTask = document.querySelector('#btn-add');
btnAddNewTask.addEventListener('click', addNewTask);

const taskInput = document.querySelector('#task-input');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addNewTask(); // chama a mesma função do botão
  }
});
