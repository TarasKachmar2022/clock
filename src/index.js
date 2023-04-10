const refs = {
    dayEl: document.querySelector('.day'),
    dateEl: document.querySelector('.date'),
    monthEl: document.querySelector('.month'),
    yearEl: document.querySelector('.year'),
    digitalClockEl: document.querySelector('.digital__clock'),
    arrowSecondsEl: document.querySelector('.arrow__seconds'),
    arrowMinutesEl: document.querySelector('.arrow__minutes'),
    arrowHoursEl: document.querySelector('.arrow__hours'),
}

const nameOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
const nameOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

setInterval(() => {
    const currentTime = new Date();
    const day = nameOfDay[currentTime.getDay()];
    const date = currentTime.getDate().toString().padStart(2, 0);
    const month = nameOfMonth[currentTime.getMonth()];
    const year = currentTime.getFullYear();
    console.log(year)

    refs.dayEl.textContent = day;
    refs.dateEl.textContent = date;
    refs.monthEl.textContent = month;
    refs.yearEl.textContent = year;

    const seconds = currentTime.getSeconds().toString().padStart(2, 0);
    const minutes = currentTime.getMinutes().toString().padStart(2, 0);
    const hours = currentTime.getHours().toString().padStart(2, 0);

    refs.digitalClockEl.textContent = `${hours} : ${minutes} : ${seconds}`;
   
    const forSecond = seconds * 6;
    const forMinute = minutes * 6;
    const forHour = hours * 30 + minutes * 0.5;
    console.log(forSecond)

    refs.arrowSecondsEl.style.transform = `rotate(${forSecond}deg)`;
    refs.arrowMinutesEl.style.transform = `rotate(${forMinute}deg)`;
    refs.arrowHoursEl.style.transform = `rotate(${forHour}deg)`;
}, 1000);