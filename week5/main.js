//main time line
const mainPage = document.querySelector('.main-page');
const mainTimeLine = mainPage.querySelector('.time-line');
const mainTimeLineLists = mainTimeLine.querySelectorAll('li');
const editToDoButton = mainTimeLine.querySelector('.edit-to-do');

console.log(mainTimeLineLists);
// add your plan modal
const addPlanPage = mainPage.querySelector('.add-plan-page');

//버튼들
const openAddPlanButton = mainPage.querySelector('.add-plan');
const closeAddPlanPageButton = addPlanPage.querySelector('.close-modal');
const addToDoListButton = addPlanPage.querySelector('.add-to-do');
console.log(addToDoListButton);

// add yout plan + 버튼 토글
openAddPlanButton.addEventListener('click', () => {
  addPlanPage.classList.add('is-open');
  loadHourMinuteOptions();
});

closeAddPlanPageButton.addEventListener('click', () => {
  addPlanPage.classList.remove('is-open');
});

// hour, minute option 추가
// minute은 10분단위 시간은 01~24
const hours = addPlanPage.querySelector('#hourSelect');
const minutes = addPlanPage.querySelector('#minuteSelect');
// const hourSection = addPlanPage.querySelector('');
console.log(minutes);
const loadHourMinuteOptions = () => {
  for (let i = 0; i < 25; i++) {
    const option = document.createElement('option');
    option.textContent = i.toString().padStart(2, 0);
    hours.append(option);
  }
  for (let i = 0; i < 60; i += 10) {
    const option = document.createElement('option');
    option.textContent = i.toString().padStart(2, 0);
    minutes.append(option);
  }
};
