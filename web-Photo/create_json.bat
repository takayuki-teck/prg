@echo off

rem 「file.list」ファイルが存在する場合には削除する
if exist file_list.js del file_list.js

rem ファイルリスト配列の作成
echo var file_list = [ > file_list.js
echo  '' >> file_list.js

set first_flg=true

rem txtファイルを一つずつ%%aに代入してループを回す
setlocal enabledelayedexpansion
for /r %%a in (*.jpg) do (
  rem %%aに代入されたファイル名をファイルに書き出す
  set line=%%a
  echo  ,'!line:\=/!' >> file_list.js
)

echo ]; >> file_list.js