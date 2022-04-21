/**テンプレート文字列
 * 文字列の中に変数を格納するやり方
 */
// 従来
const name = "じゃけぇ";
const age = 28;
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

console.log(message1);

// テンプレート文字列。。
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
