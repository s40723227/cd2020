var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'Week1~Week5 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': 'Week1 \n 建立個人倉儲cd2020及進行網站編譯 \n \n 1.下載 2019Fall可攜套件.7z \xa0 (編譯\xa0 Solvespace 用)，完成後開啟。 2.登入個人github帳號，創建新的倉儲cd2020。 3.進入要存放資料夾tmp。 4.輸入 git clone \xa0 https://github.com/s40723227/cd2020 \xa0複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。 6.將up_dir的所有項目複 製到cd2020 。 7.完成後，python wsgi.py 開始編輯倉儲(login密碼為 admin )。 8.編輯完成後，git status \xa0 -> \xa0 git add . \xa0 -> \xa0 git commit -m "XXX" \xa0 -> \xa0 git push。\xa0 \xa0 \n Week2 \n New pull request操作: 1.登入個人的github， fork 老師的倉儲 。 2.在個人倉儲中，找到fork的倉儲並複製網址。 3.輸入指令\xa0 git clone --recurse-submodules  fork的網址 ，將fork倉儲clone下來。 4.完成後，進入9443編輯網站。 5.完成編輯，接著git add .commit.push。 6.使用個人帳號下fork 倉儲，建立New pull request。 7.提交後等待老師接受並且merge即完成。 \n 將可攜系統中的 python3.7.3 更新至 python3.8.2 版本 \n 1.在隨身系統下新增一個資料夾cd2020，並在cd2020下新建資料夾data，接著在data下新增資料夾py382及 wscite432、portablegit 。 2.進入 Python 官網。 3.點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 。 4.滑至最底，找到 Windows x86-64 executable installer 並下載。 5.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382。 6.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n 7.建立新的start.bat及stop.bat。 \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};