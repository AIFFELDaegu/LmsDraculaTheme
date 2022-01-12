const timeId = { recv: -1 };
window.onload = function () {
  const toggleBtn = document.querySelector('input');
  toggleBtn.onclick = function () {
    if (toggleBtn.checked == true) {
      const theme = [
        '#282a36',
        '#44475a',
        '#f8f8f2',
        '#ff79c6',
        '#bd93f9',
        'monokai',
      ];
      toggleBlackTheme(theme);
    } else {
      clearInterval(timeId.recv);
      if (timeId.recv !== -1) {
      }
      console.log('white 테마');
    }
  };
};

const toggleBlackTheme = (theme) =>
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      try {
        var currTab = tabs[0];
        if (currTab) {
          chrome.scripting.executeScript(
            {
              target: { tabId: currTab.id },
              func: Changer,
              args: theme,
            },
            (injectionResults) => {
              timeId.recv = injectionResults[0].result;
              console.log(injectionResults[0].result);
            }
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );

const toggleWhiteTheme = (theme) =>
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      try {
        var currTab = tabs[0];
        if (currTab) {
          chrome.scripting.executeScript(
            {
              target: { tabId: currTab.id },
              func: Changer,
              args: theme,
            },
            (injectionResults) => {
              timeId.recv = injectionResults[0].result;
              console.log(injectionResults[0].result);
            }
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  );
