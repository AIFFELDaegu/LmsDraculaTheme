window.onload = async () => {
  codeThemechanger();
  changeColor();
  const toggleBtn = document.querySelector('.themeSwitch');

  await chrome.storage.local.get(['switch'], (res) => {
    toggleBtn.checked = res.switch;
  });

  toggleBtn.onclick = function () {
    const Background = document.querySelector('.Background').value;
    const Background2 = document.querySelector('.Background2').value;
    const Foreground = document.querySelector('.Foreground').value;
    const Accent = document.querySelector('.Accent').value;
    const Accent2 = document.querySelector('.Accent2').value;
    const codeMirrorTheme = getSelectedTheme();
    const theme = [
      Background,
      Background2,
      Foreground,
      Accent,
      Accent2,
      codeMirrorTheme,
    ];
    if (toggleBtn.checked == true) {
      toggleAction(theme, true);
      chrome.storage.local.set({ switch: true });
    } else {
      toggleAction(timeId.recv, false);
      chrome.storage.local.set({ switch: false });
    }
  };
};
