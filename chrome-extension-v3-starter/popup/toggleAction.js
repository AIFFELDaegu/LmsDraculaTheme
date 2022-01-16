const timeId = { recv: -1 };
const toggleAction = (theme, type) =>
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    try {
      if (tabs[0] && type === true) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: Changer,
            args: theme,
          },
          (injectionResults) => {
            chrome.storage.local.set({
              timeId: injectionResults[0].result,
            });
            console.log(injectionResults[0].result);
          }
        );
      } else if (tabs[0] && type === false) {
        chrome.storage.local.get(['timeId'], (res) => {
          chrome.scripting.executeScript(
            {
              target: { tabId: tabs[0].id },
              func: defaultTheme,
              args: [res.timeId],
            },
            () => {
              chrome.storage.local.set({ timeId: -1 });
            }
          );
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
