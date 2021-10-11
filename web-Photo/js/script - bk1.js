/***************************************
 * 変数
 **************************************/
let opa = 1;
let fadeOutFlg = true;

let photoCount = 0;
let minSleep = 1000;
let maxSleep = 3000;
let fadeInterval = 10;
let opacityInterval = 0.01

/***************************************
 * 初期表示
 **************************************/
$(document).ready(function(){
  
  // 写真の数を取得
  photoCount = file_list.length;

  // 写真切り替え
  photoChange();

});

/***************************************
 * フェードアウト
 **************************************/
function photoChange() {

  if(opa >= 1) {
    fadeOutFlg = true;

    // ここでスリープ
    sleep(getRandomInt(minSleep, maxSleep));
  } 
  if(opa <= 0) {
    fadeOutFlg = false;

    // ここで画像切り替え
    $("#img1").attr('src',file_list[getRandomInt(1,photoCount-1)])
  }
  
  if(fadeOutFlg) {
    opa = opa - opacityInterval;
    $("#img1").css('opacity', opa);
    setTimeout("photoChange()",fadeInterval);
  } else {
    opa = opa + opacityInterval;
    $("#img1").css('opacity', opa);
    setTimeout("photoChange()",fadeInterval);
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

/**
 * ランダム値取得
 * @param {*} max 
 * @returns 
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}