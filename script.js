
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.
let ulDays = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  let li = document.createElement('li');
  li.innerText = decemberDaysList[index];
  li.className = 'day';
  ulDays.appendChild(li);

  if (index === 25/*dia 24*/  || index === 26/*dia 25*/ || index === 32/*dia 31*/) {
    li.classList.add('holiday');
  }

  if (index === 5/*dia 4*/ || index === 12/*dia 11*/ || index === 19/*dia 18*/ || index === 26/*dia 25*/) {
    li.classList.add('friday');
  }
}

let holidays = document.querySelectorAll('.holiday');
const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', () => {
for (let index = 0; index < holidays.length; index += 1) {
  if (holidays[index].style.backgroundColor === 'rgb(238,238,238)'){
    holidays[index].style.backgroundColor = 'red';
  } else {
    holidays[index].style.backgroundColor = 'rgb(238,238,238)';

  }
}
  }

)