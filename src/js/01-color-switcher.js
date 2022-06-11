const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBodyBgcolor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
  constructor(updateBodyBgcolor) {
    this.intervalID = null;
    this.isActive = false;
    this.updateBodyBgcolor = updateBodyBgcolor;
    refs.stopBtn.disabled = true;
  }

  startChangeBgcolor() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(
      () => updateBodyBgcolor(getRandomHexColor()),
      1000
    );
  }

  stopChangeBgcolor() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

refs.startBtn.addEventListener('click', () =>
  colorSwitcher.startChangeBgcolor()
);
refs.stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBgcolor());
