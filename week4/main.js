// 모든 이미지
const images = document.querySelectorAll('img');
const sun = images[0];
const cloud01 = images[1];
const cloud02 = images[2];
const cat = images[3];
const ground = images[4];
console.log(images);

//윗쪽 이미지들(해, 구름)
const topImagesWrapper = document.querySelector('.images__top');
const topImages = topImagesWrapper.querySelectorAll('img');
console.log(topImages);

//가장 상위 div요소에 클릭 이벤트리스너 추가
const banner = document.querySelector('.banner');

banner.addEventListener('click', (evt) => {
  console.log('click@@');

  if (evt.target === cat) {
    goCat();
  }
  //다운로드 버튼 추가
  if (evt.target === downloadButton) {
    const link = document.createElement('a');
    link.href = '../assets/images/animation/wallpaper.png';
    link.download = '배경화면.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

//고양이 날아가는 애니메이션
function goCat() {
  gsap.to(cat, {
    rotation: 360,
    yPercent: 50,
    x: -1000,
    y: -100,
    repeat: 0,
    yoyo: true,
    duration: 1,
    repeat: 1,
    ease: 'power1.out',
  });
}

//상위 세가지 요소들 메인 움직임( timeline으로 변경 완료)
// const mainAnimation = () => {
//   gsap.fromTo(
//     topImages,

//     { y: -200, stagger: 0.3 },
//     { y: 0, stagger: 0.2, ease: 'power1.out' }
//   );
// };

// const startAnimation = gsap.fromTo(
//   topImages,

//   { y: -300, stagger: 0.3 },
//   { y: 0, stagger: 0.2, ease: 'power1.out', duration: 1 }
// );

const textWrapper = document.querySelector('.banner__describe');
const texts = textWrapper.querySelectorAll('p');
const downloadButton = textWrapper.querySelector('button');

const tl = gsap.timeline();
tl.fromTo(
  topImages,
  { y: -300, stagger: 0.3 },
  { y: 0, stagger: 0.2, ease: 'power1.out', duration: 1 }
);
tl.fromTo(texts, { x: -500 }, { x: 0, duration: 1, ease: 'power1.out' }, '<');
tl.fromTo(downloadButton, { x: -500 }, { x: 0, duration: 2, ease: 'power1.out' }, '<');
tl.fromTo([cat, ground], { x: 500 }, { x: 0, duration: 1, ease: 'power1.out' }, '<');
