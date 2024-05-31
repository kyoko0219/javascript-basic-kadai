const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

let isClicked = false;

buttonElement.addEventListener('click', () => {
  if (!isClicked) {
    setTimeout(() => {
      textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
    isClicked = true;
  }
});



// メモ
// falseとtrueを使うのは意外だった。
// jsの基礎から洗い直すことが必要かもしれない。