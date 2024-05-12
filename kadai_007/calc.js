// 変数(num)に1以上の正の数を代入する
let num = Math.floor(Math.random() * 100);

// 変数numの値を出力
console.log(num);

// 変数が3の倍数
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} else if (num % 3 === 0) {
    console.log('3の倍数です');
} else if (num % 5 === 0) {
    console.log('5の倍数です');
} else {
    console.log(num);
}