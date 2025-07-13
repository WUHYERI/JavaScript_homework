const openAddPlanButton = document.querySelector('.add-plan');
const addPlanPage = document.querySelector('.add-plan-page');
const closeAddPlanPageButton = addPlanPage.querySelector('.close-modal');

// add yout plan + 버튼 토글
openAddPlanButton.addEventListener('click', () => {
  addPlanPage.classList.add('is-open');
});

closeAddPlanPageButton.addEventListener('click', () => {
  addPlanPage.classList.remove('is-open');
});

// hour, minute option 추가
// minute은 30분단위 시간은 01~24
