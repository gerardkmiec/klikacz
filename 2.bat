@echo off
set /p url="Podaj link do konferencji: "
call protractor ./conf.js --params.url=%url%
pause