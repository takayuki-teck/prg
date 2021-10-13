@echo off

@rem UTF-8
chcp 65001

rem ==================================================
rem 現在のディレクトリ配下にあるjpgファイルを取得して
rem javascript配列データを作成する
rem ==================================================

rem 「file.list」ファイルが存在する場合には削除する
if exist file_list.js del file_list.js

rem ファイルリスト配列の作成
rem 最初のデータはダミー
echo var file_list = [ > file_list.js
echo  '' >> file_list.js

rem jpgファイルを一つずつ%%aに代入してループを回す
setlocal enabledelayedexpansion
for /r %%a in (*.jpg) do (

  rem %%aに代入されたファイル名をファイルに書き出す
  set line=%%a
  rem \を/に置換する
  echo  ,'!line:\=/!' >> file_list.js
)

rem 最後に配列の閉じカッコを出力
echo ]; >> file_list.js