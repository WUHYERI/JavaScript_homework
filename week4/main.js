// 모든 이미지
const images = document.querySelectorAll('img');
const sun = images[0];
const cloud01 = images[1];
const cloud02 = images[2];
const cat = images[3];
const ground = images[4];
console.log(images);

//윗쪽 이미지들
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

//상위 세가지 요소들 메인 움직임
// const mainAnimation = () => {
//   gsap.fromTo(
//     topImages,

//     { y: -200, stagger: 0.3 },
//     { y: 0, stagger: 0.2, ease: 'power1.out' }
//   );
// };

const startAnimation = gsap.fromTo(
  topImages,

  { y: -300, stagger: 0.3 },
  { y: 0, stagger: 0.2, ease: 'power1.out', duration: 1 }
);

const textWrapper = document.querySelector('.banner__describe');
console.log(textWrapper);
const texts = textWrapper.querySelectorAll('p');

console.log(texts);
const textButton = textWrapper.querySelector('button');

const tl = gsap.timeline();

tl.fromTo(texts, { x: -500 }, { x: 0, duration: 1, ease: 'power1.out' }, '<');
tl.fromTo(textButton, { x: -500 }, { x: 0, duration: 0.5, ease: 'power1.out' }, '+=0.3');
