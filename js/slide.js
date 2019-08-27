const quoteSlide = [{
    q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    p: '- Tom Brown',
    img: 'images/face.jpg'
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni amet veniam error quis asperiores a doloremque aspernatur consectetur, qui delectus aperiam eos quae  quibusdam!",
    p: '- Alexandra Paul',
    img: 'images/face2.png'
  },
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    p: '- Anna Mark',
    img: 'images/face3.png'
  },
];

let quote = document.querySelector('q.slider');
let author = document.querySelector('p.slider');

let image = document.querySelector('img.slider');

const dots = [...document.querySelectorAll(".dots li")]


const time = 3000;

let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};
const changeSlide = () => {
  active++;
  if (active === quoteSlide.length) {
    active = 0;
  }
  quote.textContent = quoteSlide[active].q;
  image.src = quoteSlide[active].img;
  author.textContent = quoteSlide[active].p;
  changeDot();
};

let indexInterval = setInterval(changeSlide, time);