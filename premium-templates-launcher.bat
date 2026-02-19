@echo off
echo 🧞‍♂️✨ Premium Templates All-In-One Launcher
echo.
echo ====================================
echo   4개 템플릿 통합 실행 스크립트
echo ====================================
echo.

echo 📋 사용 가능한 템플릿:
echo.
echo [1] 🎨 furniture-shop       - 포트 5001
echo [2] 📁 design portfolio     - 포트 5004  
echo [3] 🏢 design studio      - 포트 5003
echo [4] 👟 sneaker-shop        - 포트 5002
echo [5] 🚀 모든 템플릿 실행
echo [6] 🔄 모든 템플릿 재시작
echo [7] 🛑 모든 서버 종료
echo [8] 📊 상태 확인
echo.

set /p choice="선택하세요 (1-8): "

if "%choice%"=="1" goto furniture
if "%choice%"=="2" goto design_portfolio
if "%choice%"=="3" goto design_studio
if "%choice%"=="4" goto sneaker
if "%choice%"=="5" goto all_start
if "%choice%"=="6" goto restart
if "%choice%"=="7" goto kill_all
if "%choice%"=="8" goto status

:furniture
echo 🎨 furniture-shop 실행 중...
start "Furniture Shop" cmd /k "cd /d D:\Work\premium-templates\furniture-shop && npm run dev"
goto end

:design_portfolio
echo 📁 design portfolio 실행 중...
start "Design Portfolio" cmd /k "cd /d D:\Work\premium-templates\design portfolio && npm run dev"
goto end

:design_studio
echo 🏢 design studio 실행 중...
start "Design Studio" cmd /k "cd /d D:\Work\premium-templates\design studio && npm run dev"
goto end

:sneaker
echo 👟 sneaker-shop 실행 중...
start "Sneaker Shop" cmd /k "cd /d D:\Work\premium-templates\sneaker-shop && npm run dev"
goto end

:all_start
echo 🚀 모든 템플릿 실행 중...
echo.
echo 1️⃣ furniture-shop (5001) 시작...
start "Furniture Shop" cmd /k "cd /d D:\Work\premium-templates\furniture-shop && npm run dev"
timeout /t 3 /nobreak >nul

echo 2️⃣ sneaker-shop (5002) 시작...
start "Sneaker Shop" cmd /k "cd /d D:\Work\premium-templates\sneaker-shop && npm run dev"
timeout /t 3 /nobreak >nul

echo 3️⃣ design studio (5003) 시작...
start "Design Studio" cmd /k "cd /d D:\Work\premium-templates\design studio && npm run dev"
timeout /t 3 /nobreak >nul

echo 4️⃣ design portfolio (5004) 시작...
start "Design Portfolio" cmd /k "cd /d D:\Work\premium-templates\design portfolio && npm run dev"

echo.
echo ✅ 모든 템플릿 실행 완료!
goto show_urls

:restart
echo 🔄 모든 템플릿 재시작...
goto all_start

:kill_all
echo 🛑 모든 서버 종료 중...
taskkill /F /IM node.exe 2>nul
echo ✅ 모든 서버 종료 완료!
goto end

:status
echo 📊 상태 확인...
netstat -ano | findstr ":500"
echo.

:show_urls
echo.
echo ====================================
echo   🌐 접속 주소 (4개 템플릿)
echo ====================================
echo.
echo 🎨 http://localhost:5001 - Furniture Shop
echo 👟 http://localhost:5002 - Sneaker Shop
echo 🏢 http://localhost:5003 - Design Studio
echo 📁 http://localhost:5004 - Design Portfolio
echo.
echo ====================================

:end
echo.
echo 🧞‍♂️✨ Premium Templates Launcher
echo 아무 키나 누르면 종료...
pause >nul