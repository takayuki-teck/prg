@echo off
echo tailをしています…
powershell -NoProfile -ExecutionPolicy Unrestricted .\tail.ps1
echo 完了しました！
pause > nul
exit