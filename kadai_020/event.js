// HTMLから要素を取得
const btn = document.getElementById('btn'); // ボタン要素
const text = document.getElementById('text'); // テキストを表示する要素

// ボタンがクリックされた時の処理を関数として定義
function handleClick() {
  // テキスト要素のテキストを書き換える
text.textContent = 'ボタンをクリックしました';
}

// ボタンにクリックイベントリスナーを追加
btn.addEventListener('click', handleClick);






// メモ
// 3行目 HTMLタグで指定したidに合うドキュメント要素を取得するメソッド
// 6行目 handleはイベント(クリックしたとき)に具体的に何をするのかを記述する関数
// 8行目 特定のtextに対して文字列で取得
// 12行目 １つのイベント(クリックしたとき)に対して複数のハンドラの割り当てができる。

// 感想：まだまだ知らないことの方が多く、質問を見ながら実装しているが、この教材が終わったときにもう一度何も見ることなくできるようにMDNも有効活用できるようにしたい。