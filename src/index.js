/**テンプレート文字列
 * 文字列の中に変数を格納するやり方
 */
// 従来
// const name = "じゃけぇ";
// const age = 28;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

// console.log(message1);

// // テンプレート文字列。。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**アロー関数
 *
 */
// 従来
// const func1 = function (str) {
//   //JSでは関数の返り値をそのまま変数に格納できる
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// 注意事項は2つ
// 1.(str)の()は省略可能
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です"));
// 2.処理が一行である場合は中括弧とreturn記載が省ける
const func2 = (str) => str;
console.log(func2("func2です"));
