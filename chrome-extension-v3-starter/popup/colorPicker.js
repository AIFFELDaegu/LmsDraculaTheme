function changeColor() {
  const colorPicker = document.querySelectorAll('input');

  for (let i = 0; i <= 4; i++) {
    colorPicker[i].addEventListener(
      'change',
      (e) => {
        colorPicker[i].setAttribute('value', e.target.value);
        console.log(e.target.value);
      },
      true
    );
  }
}
