/***************************************
 * 変数
 **************************************/
let photoCount = 0;
let minSleep = 100;
let maxSleep = 100;
let fadeInterval = 10;
let opacityInterval = 0.01;
let photoList = [];

/***************************************
 * 初期表示
 **************************************/
$(document).ready(function(){
  
  // 写真の数を取得
  photoCount = file_list.length;

  // photo配列作成
  photoList.push($("#img1"));
  photoList.push($("#img2"));
  photoList.push($("#img3"));
  photoList.push($("#img4"));
  photoList.push($("#img5"));
  photoList.push($("#img6"));
  photoList.push($("#img7"));
  photoList.push($("#img8"));
  photoList.push($("#img9"));
  photoList.push($("#img10"));

  // 写真初期化
  initPhoto();

  // 写真切り替え
  photoChange(photoList[getRandomInt(0,10)]);

});

/***************************************
 * フェードアウト
 **************************************/
const photoChange = (tgt) => {

  let obj = tgt;

  if(obj.css('opacity') >= 1) {
    obj.removeClass('disp-photo').addClass('change-photo');

    // ここでスリープ
    sleep(getRandomInt(minSleep, maxSleep));

    // 対象の画像を変更
    obj = photoList[getRandomInt(0,10)];
  } 
  if(obj.css('opacity') <= 0) {
    obj.removeClass('change-photo').addClass('disp-photo');

    // ここで画像切り替え
    obj.attr('src',file_list[getRandomInt(1,photoCount-1)]);
  }

  var opa = obj.css('opacity');

  if(obj.hasClass('change-photo')) {
    obj.css('opacity', Number(opa) - opacityInterval);
    
    setTimeout(function(){photoChange(obj)},fadeInterval);
  } else {
    obj.css('opacity', Number(opa) + opacityInterval);
    
    setTimeout(function(){photoChange(obj)},fadeInterval);
  }
};

/***************************************
 * スリープ
 * @param {スリープ時間} waitMsec 
 **************************************/
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

/***************************************
 * ランダム値取得
 * @param {*} max 
 * @returns 
 **************************************/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

/***************************************
 * 写真初期化
 **************************************/
function initPhoto() {

  for(let i=0; i < photoList.length; i++) {
    photoList[i].attr('src',file_list[getRandomInt(1,photoCount-1)])
  }
}