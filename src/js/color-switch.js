const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const CHANGE_DELAY = 1000;
let timeoutId = null;
let isActive = false;

const refs = {
    buttonStartRef: document.querySelector('[data-action="start"]'),
    buttonCloseRef: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

refs.buttonStartRef.addEventListener('click', onButtonStartClick);
refs.buttonCloseRef.addEventListener('click', onButtonCloseClick);

function onButtonStartClick() {
    refs.buttonStartRef.disabled = true;
     
    timeoutId = setInterval(() => {
        console.log('After clicking');
        BodyChangeColor()
    }, CHANGE_DELAY);
}

function onButtonCloseClick() {
  clearInterval(timeoutId);
  refs.buttonStartRef.disabled = false;
}

function BodyChangeColor() {
  const min = 0;
  const max = colors.length - 1;
  const randomColor = randomIntegerFromInterval(min, max);
  refs.body.style.backgroundColor = colors[randomColor];
}


