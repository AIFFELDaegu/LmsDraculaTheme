function Changer(Background, Background2, Foreground, accent, accent2, theme) {
  const monokaiLink = document.createElement('link');
  const draculaLink = document.createElement('link');
  draculaLink.href =
    'https://cdn.jsdelivr.net/npm/codemirror@5.65.0/theme/dracula.css';
  draculaLink.rel = 'stylesheet';
  document.head.appendChild(draculaLink);
  monokaiLink.href =
    'https://cdn.jsdelivr.net/npm/codemirror@5.65.0/theme/monokai.css';
  monokaiLink.rel = 'stylesheet';
  document.head.appendChild(monokaiLink);

  const sideDiv = document.querySelectorAll('.lightBack');
  rotateBackground(sideDiv, Background);

  const contentDiv = document.querySelector('.stepMain__body');
  contentDiv.style.backgroundColor = Background;
  contentDiv.style.color = Foreground;

  const header = document.querySelector('.ant-layout-header');
  header.style.backgroundColor = Background;
  header.style.backgroundColor = Background;

  const timerId = setInterval(() => {
    const codeMirrorIcon = document.querySelectorAll('.kernel-icon');
    const contentDivHead = document.querySelector('h1');
    const linkTag = document.querySelectorAll('.setpMain_content a');
    const contentLinkTag = document.querySelectorAll('.stepMain__content a');
    const nodeListIndex = document.querySelectorAll('.list-item>.title');
    const remoteDiv = document.querySelector('.stepMain__btn-inner');
    const codeBackTick = document.querySelectorAll('code');
    const blockquoteString = document.querySelectorAll('blockquote p');
    const blockquoteLi = document.querySelectorAll('blockquote li');
    const codeMirror = document.querySelectorAll(
      '.CodeMirror ,cm-s-github-light'
    );
    const codeMirrorButtonBlock = document.querySelectorAll(
      '.aifel__button-block'
    );
    const codeMirrorKernelButton = document.querySelectorAll(
      '.aiffel-btn ,.aiffel-kernel-run-button'
    );
    function repeat() {
      rotateColor(blockquoteString, Foreground);
      rotateColor(blockquoteLi, Foreground);
      rotateColor(codeMirrorIcon, Foreground);
      rotateClassName(codeMirror, `CodeMirror cm-s-${theme}`);
      rotateColor(linkTag, Foreground);
      rotateColor(contentLinkTag, accent);
      rotateBackground(codeMirrorButtonBlock, Background);
      contentDivHead.style.color = accent2;
      remoteDiv.style.backgroundColor = Background;

      for (let i = 0; i < nodeListIndex.length; i++) {
        nodeListIndex[i].style.backgroundColor = Background;
        nodeListIndex[i].style.setProperty('color', Foreground, 'important');
      }

      for (let i = 0; i < codeBackTick.length; i++) {
        codeBackTick[i].style.backgroundColor = Background2;
        codeBackTick[i].style.color = accent;
        codeBackTick[i].style.borderRadius = '1rem';
        codeBackTick[i].style.fontWeight = 'bold';
      }

      for (let i = 0; i < codeMirrorKernelButton.length; i++) {
        codeMirrorKernelButton[i].style.setProperty(
          'background-color',
          Background2,
          'important'
        );

        codeMirrorKernelButton[i].style.setProperty(
          'color',
          Foreground,
          'important'
        );
      }
    }

    repeat();
    //배경색, 조금 옅은 배경색, 폰트색, 강조(핑크),강조(보라),code테마
  }, 500);

  return timerId;
}