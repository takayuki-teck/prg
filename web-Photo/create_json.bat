@echo off

rem �ufile.list�v�t�@�C�������݂���ꍇ�ɂ͍폜����
if exist file_list.js del file_list.js

rem �t�@�C�����X�g�z��̍쐬
echo var file_list = [ > file_list.js
echo  '' >> file_list.js

set first_flg=true

rem txt�t�@�C���������%%a�ɑ�����ă��[�v����
setlocal enabledelayedexpansion
for /r %%a in (*.jpg) do (
  rem %%a�ɑ�����ꂽ�t�@�C�������t�@�C���ɏ����o��
  set line=%%a
  echo  ,'!line:\=/!' >> file_list.js
)

echo ]; >> file_list.js