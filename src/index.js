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
//   //JSでは関数の返り値をそのまま関数に格納できる
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
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**分割代入
 *
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };

// 従来
// オブジェクトを作成し、プロパティの値を参照できるが、オブジェクト名が長いと記載が長くなる
// const message1 = `私の名前は${myProfile.name}です。${myProfile.age}歳です`;
// console.log(message1);

// 分割代入
// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。${age}歳です。`;
// console.log(message2);

// 配列の場合でもできる
// const myProfile = ["じゃけぇ", "28"];

// 従来
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// 分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**デフォルト値、引数
 *
 */
// 変数に何も入れず関数を実行すると、変数はundefinedになる。
// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello();
// ＞こんにちは！undefinedさん！

// 何も入れないとバグが生まれるため、デフォルト引数を設定することができる
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello((name = "じゃけぇ"));
