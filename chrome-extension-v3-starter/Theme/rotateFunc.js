const rotateBackground = (target, color) => {
  for (let i = 0; i < target.length; i++) {
    target[i].style.backgroundColor = color;
  }
};
const rotateColor = (target, color) => {
  for (let i = 0; i < target.length; i++) {
    target[i].style.color = color;
  }
};
const rotateClassName = (target, newClassName) => {
  for (let i = 0; i < target.length; i++) {
    target[i].className = newClassName;
  }
};
