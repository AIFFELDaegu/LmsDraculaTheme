const codeThemechanger = () => {
  const themeList = document.querySelector('#codeTheme').children;
  for (let i = 0; i < themeList.length; i++) {
    themeList[i].addEventListener('click', (e) => {
      for (let j = 0; j < themeList.length; j++) {
        themeList[j].setAttribute('value', 0);
        themeList[j].style.background = '#3c3c3c';
      }
      themeList[i].setAttribute('value', 1);
      themeList[i].style.background = '#45494e';
    });
  }
};

const getSelectedTheme = () => {
  const themeList = document.querySelector('#codeTheme').children;
  let selected = 'monokai';
  for (let i = 0; i < themeList.length; i++) {
    if (themeList[i].value === 1) selected = themeList[i].id;
  }
  return selected;
};
