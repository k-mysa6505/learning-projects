console.log("JavaScript is amazing!");
/*
//  DOM要素の取得
//  IDで取得（単一要素）
const element = document.getElementById('myID');
//  クラス名で取得（複数要素のコレクション）
const elements = document.getElementsByClassName('myClass');
//  タグ名で取得（複数要素のコレクション）
const paragraphs = document.getElementsByTagName('p');
//  CSSセレクタで取得（単一要素，最初にマッチするもの）
const firstButton = document.querySelector('.btn');
// CSSセレクタで取得（複数要素のコレクション）
const allButtons = document.querySelectorAll('.btn');

//  HTML要素の内容操作
//  テキスト内容の変更（テキストのみ，HTMLタグは解釈されない）
element.textContent = 'new text';
//  HTML内容の変更（HTMLタグも解釈される）
element.innerHTML = '<strong>bold text</strong>';
//  要素の属性を取得
const src = image.getAttribute('src');
//  要素の属性を設定
image.setAttribute('alt', 'discription of the image');
//  データ属性の操作
const value = element.dataset.value;    //  data-value属性の取得
element.dataset.info = 'new info';      //  data-info属性の設定

//  CSSスタイルの操作
//  インライン
element.style.color = 'blue';
element.style.fontSize = '20px';
element.style.backgroundColor = '#f0f0f0';
//  クラスの追加・削除・トグル
element.classList.add('highlight');
element.classList.remove('hidden');
element.classList.toggle('active');     //  クラスが存在すれば削除，なければ追加
element.classList.contains('selected'); //  クラスの存在確認（true/falseを返す）

//  要素の作成と追加
const newDiv = document.createElement('div');
const newText = document.createTextNode('new text');
//  要素にテキストを追加
newDiv.appendChild(newText);
//  既存の要素に新しい要素を子として追加
document.body.appendChild(newDiv);  //  bodyの末尾に追加
parentElement.prepend(newDiv);      //  親要素の先頭に追加
//  特定の位置に挿入
parentElement.insertBefore(newElement, referenceElement);
//  要素の置き換え
parentElement.replaceChild(newElement, oldElement);
//  要素の削除
element.remove();   //  要素自身を削除
parentElement.removeChild(childElement);    //  親要素から子要素を削除

//  イベント処理
//  イベントリスナーの追加
element.addEventListener('click', function(event) {
    console.log('clicked');
    console.log(event.target);  //  イベントが発生した要素
});
//  マウスイベント
element.addEventListener('mouseover', function() {
    this.style.color = 'red';
});
element.addEventListener('mouseout', function() {
    this.style.color = 'black';
});
//  フォームイベント
form.addEventListener('submit', function(event) {
    event.preventDefault(); //  フォームのデフォルト送信を防ぐ
    //  フォームデータの処理
});
//  イベントリスナーの解除
element.removeEventListener('click', handlerFunction);

//  要素の位置・サイズ情報の取得
// 要素の位置とサイズ情報を取得
const rect = element.getBoundingClientRect();
console.log(rect.top);    // ビューポートの上端からの距離
console.log(rect.left);   // ビューポートの左端からの距離
console.log(rect.width);  // 要素の幅
console.log(rect.height); // 要素の高さ
// スクロール位置の取得/設定
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.scrollTo(0, 500);  // 指定位置にスクロール

//  CSSの計算値の取得
// 適用されているCSSプロパティの計算値を取得
const styles = window.getComputedStyle(element);
const fontSize = styles.getPropertyValue('font-size');
const color = styles.color;

//  DOMの走査
// 親要素へのアクセス
const parent = element.parentNode;
const parent2 = element.parentElement;
// 子要素へのアクセス
const children = element.children;        // すべての子要素
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;
// 兄弟要素へのアクセス
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;

//  DOM変更監視
// DOM変更の監視
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log(mutation.type);
    });
});
observer.observe(targetNode, {
    attributes: true,
    childList: true,
    subtree: true
});
*/

//  イベントリスナーの追加
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
heading.addEventListener("click", function() {
    heading.style.color = '#ff0000';
    heading.textContent = 'Clicked!';
});

//  画像要素の取得と操作
const image = document.querySelector('img');
image.addEventListener('mouseover', function() {
    this.style.opacity = '0.7'; //  マウスオーバーで透明度を変更
});
image.addEventListener('mouseout', function() {
    this.style.opacity = '1'; //  マウスアウトで透明度を戻す
});

//  ボタンの作成と追加
const button = document.createElement('button');
button.textContent = 'Push Me';
button.style.padding = '10px';
button.style.margin = '20px';
button.style.backgroundColor = '#4caf50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '4px';

button.addEventListener('click', function() {
    alert('Button clicked!');
});

document.body.appendChild(button);