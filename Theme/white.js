function defaultTheme(timeId) {
  console.log(`here ${timeId}`);
  clearInterval(timeId);
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

  const sideDiv = document.querySelectorAll('.lightBack');
  rotateBackground(sideDiv, '#fff');

  const contentDiv = document.querySelector('.stepMain__body');
  contentDiv.style.backgroundColor = '#fff';
  contentDiv.style.color = '#000';

  const header = document.querySelector('.ant-layout-header');
  header.style.backgroundColor = '#fff';
  header.style.backgroundColor = '#fff';

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
  rotateColor(blockquoteString, '#000');
  rotateColor(blockquoteLi, '#000');
  rotateColor(codeMirrorIcon, '#000');
  rotateClassName(codeMirror, `CodeMirror cm-s-github-light`);
  rotateColor(linkTag, '#5a7fff');
  rotateColor(contentLinkTag, '#5a7fff');
  rotateBackground(codeMirrorButtonBlock, '#fff');
  contentDivHead.style.color = '#000';
  remoteDiv.style.backgroundColor = '#fff';

  for (let i = 0; i < nodeListIndex.length; i++) {
    nodeListIndex[i].style.backgroundColor = '#fff';
    nodeListIndex[i].style.setProperty('color', '#000', 'important');
  }

  for (let i = 0; i < codeBackTick.length; i++) {
    codeBackTick[i].style.backgroundColor = '#f1f1f1';
    codeBackTick[i].style.color = 'black';
  }

  for (let i = 0; i < codeMirrorKernelButton.length; i++) {
    codeMirrorKernelButton[i].style.setProperty(
      'background-color',
      '#f1f1f1',
      'important'
    );

    codeMirrorKernelButton[i].style.setProperty('color', '#000', 'important');
  }
}
