//main time line page
const mainPage = document.querySelector('.main-page');
const mainTimeLine = mainPage.querySelector('.time-line');
const mainTimeLineLists = mainTimeLine.querySelectorAll('li');
const editToDoButton = mainTimeLine.querySelector('.edit-to-do');

// add your plan modal
const addPlanPage = mainPage.querySelector('.add-plan-page');
const openAddPlanButton = mainPage.querySelector('.add-plan');
const closeAddPlanPageButton = addPlanPage.querySelector('.close-modal');
const addToDoListButton = addPlanPage.querySelector('.add-to-do');
const toDoTitle = addPlanPage.querySelector('#to-do-title');
const toDoLists = addPlanPage.querySelector('.to-do-list');
const userName = addPlanPage.querySelector('#userName');
const userColor = addPlanPage.querySelector('#userColor');

//투두리스트들 배열
const toDos = [];

console.log(addToDoListButton);

//
//
//
// add yout plan + 버튼 토글
openAddPlanButton.addEventListener('click', () => {
  addPlanPage.classList.add('is-open');
  loadHourMinuteOptions();
});

//to-do list 추가버튼
addPlanPage.addEventListener('click', (evt) => {
  console.log(evt.target);
  const target = evt.target;
  switch (target) {
    // add yout plan + 닫기 버튼
    case closeAddPlanPageButton:
      addPlanPage.classList.remove('is-open');
      clearAllUnsavedLists();
      break;

    //to-do list 추가 버튼
    case addToDoListButton:
      addToDoList();

      break;
  }
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
    option.textContent = i.toString().padStart(2, '0');
    hours.append(option);
  }
  for (let i = 0; i < 60; i += 10) {
    const option = document.createElement('option');
    option.textContent = i.toString().padStart(2, 0);
    minutes.append(option);
  }
};

// - 시간, 분, 내용 을 받음
// - .to -do -list 에 추가 - 시간:분 - 내용 포멧으로 추가되어야함.
function addToDoList() {
  const selectedHour = hours.value;
  const selectedMinute = minutes.value;
  const toDoText = toDoTitle.value;

  const toDo = {
    name: userName.value,
    color: userColor.value,
    hour: selectedHour,
    minute: selectedMinute,
    text: toDoText,
  };

  toDos.push(toDo);
  console.log(toDos);

  if (!toDo.name) {
    alert('이름을 입력해주세요');
    return;
  }
  if (!toDoText) {
    alert('할 일을 입력해주세요!');
    return;
  }

  //추가할 새 todo list 생성
  const list = document.createElement('li');
  list.textContent = `${toDo.hour}:${toDo.minute} - ${toDo.text}`;

  //시간 순서에 따라서 리스트 삽입 하려면?
  //이미 더해진 리스트 시간 > 새로 추가할 리스트 시간 일 때 이미 더해진 리스트 앞에 insertBefore()로..

  let inserted = false;

  //첫번째 투두 리스트는 바로 추가
  if (!inserted) {
    toDoLists.append(list);
    const existingLists = toDoLists.querySelectorAll('li');
    console.log(existingLists);
    inserted = true;
  }

  const newTotalMinutes = toDo.hour * 60 + toDo.minute;
  const existingLists = toDoLists.querySelectorAll('li');

  //두번째 부터는 비교 필요
  for (const existingList of existingLists) {
    const [exitTime] = existingList.textContent.split(' - ');
    const [exitHour, exitMinute] = exitTime.split(':');
    const existingListTotalTime = exitHour * 60 + exitMinute;

    if (newTotalMinutes <= existingListTotalTime) {
      toDoLists.insertBefore(list, existingList);
      break;
    } else {
      toDoLists.append(list);
    }
  }

  clearText();
}

function clearText() {
  toDoTitle.value = '';
}
