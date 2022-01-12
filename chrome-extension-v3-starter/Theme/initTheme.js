const initTheme = (theme, Background, Foreground) => {
  const themeLink = document.createElement('link');
  themeLink.href = `https://cdn.jsdelivr.net/npm/codemirror@5.65.0/theme/${theme}.css`;
  themeLink.rel = 'stylesheet';
  document.head.appendChild(themeLink);

  const sideDiv = document.querySelectorAll('.lightBack');
  rotateBackground(sideDiv, Background);

  const contentDiv = document.querySelector('.stepMain__body');
  contentDiv.style.backgroundColor = Background;
  contentDiv.style.color = Foreground;

  const header = document.querySelector('.ant-layout-header');
  header.style.backgroundColor = Background;
  header.style.backgroundColor = Background;
};
