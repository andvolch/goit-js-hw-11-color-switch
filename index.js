const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onFonChange() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    
};

let id = null;

function fonChangeStart() {
    id = setInterval(() => {
        onFonChange();
        
    }, 1000);
    refs.start.disabled = true;
};

function fonChangeStop() {
    clearInterval(id);
    refs.start.disabled = false;
};


refs.start.addEventListener('click', fonChangeStart);
refs.stop.addEventListener('click', fonChangeStop);


