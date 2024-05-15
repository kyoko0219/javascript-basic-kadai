// 現在の日時を取得するためのDateオブジェクトのインスタンスを作成
const now = new Date();

// 年を取得
const year = now.getFullYear();

// 月を取得（getMonth()は0-11の値を返すため、1を加える）
const month = now.getMonth() + 1;

// 日を取得
const date = now.getDate();

// テンプレートリテラルを使って年月日を結合し、文字列を作成
const dateString = `${year}年${month}月${date}日`;

// コンソールに出力
console.log(dateString);
