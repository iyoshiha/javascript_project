var cody = new Object();

cody.living = true;
cody.age = 33;
cody.gender = 'male';

console.log(cody);

var myString = new String('foo');
console.log(myString);
/* JavaScript 言語であらかじめ定義されている String() コンストラクタ関数も上記と同様のオ
ブジェクトの生成パターンを持っています。String() の場合コンストラクタ関数は JavaScript
にビルトインされているため、インスタンス化を行うだけで文字列インスタンスを得ることがで
きます。しかし組み込みのコンストラクタ関数を使おうが、 Peson()  のようなカスタムコンス
トラクタ関数を使おうが、オブジェクトの生成パターンは同じです。 */

/* コンストラクタを作ることで再利用可能*/

var Person = function Person(living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender;
    this.getGender = function() {return this.gender};
}

var cody = new Person(ture, 33, 'male');

console.log(typeof coby);
console.log(cody);
console.log(cody.constructor); // Person funcそのものを出力


