const images = document.querySelectorAll('img');
const sun = images[0];
const cloud01 = images[1];
const cloud02 = images[2];
const cat = images[3];
const ground = images[4];

const banner = document.querySelector('.banner');

console.log(images);

banner.addEventListener('click', (evt) => {
  console.log('click@');

  if (evt.target === cat) {
    goCat();
  }
});

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
  });
}
