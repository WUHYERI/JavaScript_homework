//캐러셀
const carousel = document.querySelector('.carousel');
//콘텐츠 래퍼
const contentWrapper = carousel.querySelector('.carousel__contents');
//콘텐츠 리스트
const contents = contentWrapper.querySelectorAll('.carousel__content');
//페이지네이션 버튼들 리스트
const pagenations = carousel.querySelectorAll('.carousel__pagenation');
//다음 버튼
const nextButton = carousel.querySelector('[aria-label*="다음"]');
//이전 버튼
const prevButton = carousel.querySelector('[aria-label*="이전"]');

console.log(prevButton, nextButton);

//선택된 상태를 나타내는 클래스이름
// 첫번재 콘텐츠와 1번 페이지네이션이 선택된 상태로 시작
const SELECTED_CLASSNAME = 'is-selected';
//현재 인덱스 확인용 변수
let currentIndex = 0;

//다음 버튼 구현

//인덱스 갱신 함수
function updateCarousel(index) {
  contents.forEach((content) => {
    //모든 리스트에서 선택클래스 제거
    content.classList.remove(SELECTED_CLASSNAME);
  });
  //index 콘텐츠에 선택클래스 추가
  contents[index].classList.add(SELECTED_CLASSNAME);

  //페이지네이션 버튼에서 선택 클래스 제거
  pagenations.forEach((pagenation) => {
    pagenation.classList.remove(SELECTED_CLASSNAME);
  });
  //선택된 버튼에 선택 클래스 추가
  pagenations[index].classList.add(SELECTED_CLASSNAME);
}

//현재 선택된 인덱스 찾기 함수
function getCurrentIndex() {
  return Array.from(contents).findIndex((el) => {
    return el.classList.contains(SELECTED_CLASSNAME);
  });
}

//다음 버튼
nextButton.addEventListener('click', () => {
  const currentIndex = getCurrentIndex();
  console.log('clck');
  let nextIndex = currentIndex + 1;

  //마지막 콘텐츠에서 다시 첫번째로
  if (nextIndex >= contents.length) {
    nextIndex = 0;
  }

  //다음 콘텐츠 위치
  const distance = nextIndex * 100 + '%';
  //트랜스폼으로 위치 이동
  contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

  //캐러셀 상태 업데이트
  updateCarousel(nextIndex);
  settingTabindexControl();
});

//이전버튼
prevButton.addEventListener('click', () => {
  const currentIndex = getCurrentIndex();
  let prevIndex = currentIndex - 1;

  //처음콘텐츠에서 마지막으로
  if (prevIndex < 0) {
    prevIndex = contents.length - 1;
  }

  //이전 컨텐츠 위치
  const distance = prevIndex * 100 + '%';
  contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

  updateCarousel(prevIndex);
  settingTabindexControl();
});

//페이지네이션 버튼
pagenations.forEach((pagenation) => {
  pagenation.addEventListener('click', () => {
    let selectedIndex;

    //현재 선택된 인덱스 찾기
    for (let i = 0; i < pagenations.length; i++) {
      if (pagenations.item(i) === pagenation) {
        selectedIndex = i;
        break;
      }
    }

    const distance = selectedIndex * 100 + '%';
    contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

    updateCarousel(selectedIndex);
    settingTabindexControl();
  });
});

//접근성 향상
//키보드로 접근 시 콘텐츠 컨테이너 포커스 상태일 때 화살표 버튼 계속 보이게

//화면에 감춰진 콘텐츠는 키보드 초점 이동 안되게
function settingTabindexControl() {
  for (const content of contents) {
    if (content.classList.contains(SELECTED_CLASSNAME)) {
      content.querySelector('a').removeAttribute('tabindex');
    } else {
      content.querySelector('a').setAttribute('tabindex', '-1');
    }
  }
}
settingTabindexControl();

function moveContent(index) {
  if (index < 0) {
    index = contents.length - 1;
  } else if (index > contents.length - 1) {
    index = 0;
  }

  const distance = index * 100 + '%';
  contentWrapper.style.setProperty('transform', 'translateX(-' + distance + ')');

  updateCarousel(index);
  settingTabindexControl();
}

//키보드 방향키로 슬라이드 이동
carousel.addEventListener('keydown', (evt) => {
  const currentIndex = getCurrentIndex();
  //오른쪽 방향키 누르면 다음 버튼
  if (evt.key === 'ArrowRight') {
    moveContent(currentIndex + 1);
  }
  //왼쪽 방향키 누르면 이전 버튼
  else if (evt.key === 'ArrowLeft') {
    moveContent(currentIndex - 1);
  }
});
