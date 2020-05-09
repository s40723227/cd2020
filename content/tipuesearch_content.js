var tipuesearch = {"pages": [{'title': 'Weeks', 'text': '分組網站: https://s40723227.github.io/cd2020bg3/content/Assignment.html \n Week1~Week5 \n Week6-Week9 \n Week10-Week14 \n Week15-Week18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': 'Week1 \n 建立個人倉儲cd2020及進行網站編譯 \n \n 1.下載 2019Fall可攜套件.7z \xa0 (編譯\xa0 Solvespace 用)，完成後開啟。 2.登入個人github帳號，創建新的倉儲cd2020。 3.進入要存放資料夾tmp。 4.輸入 git clone \xa0 https://github.com/s40723227/cd2020 \xa0複製 個人倉儲至資料夾 。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 取得子模組資料。 6.將up_dir的所有項目複 製到cd2020 。 7.完成後，python wsgi.py 開始編輯倉儲(login密碼為 admin )。 8.編輯完成後，git status \xa0 -> \xa0 git add . \xa0 -> \xa0 git commit -m "XXX" \xa0 -> \xa0 git push。\xa0 \xa0 \n Week2 \n New pull request操作: 1.登入個人的github， fork 老師的倉儲 。 2.在個人倉儲中，找到fork的倉儲並複製網址。 3.輸入指令\xa0 git clone --recurse-submodules  fork的網址 ，將fork倉儲clone下來。 4.完成後，進入9443編輯網站。 5.完成編輯，接著git add .commit.push。 6.使用個人帳號下fork 倉儲，建立New pull request。 7.提交後等待老師接受並且merge即完成。 \n 重新創建python3.8.2隨身系統 \n \n 1.在隨身系統下新增一個資料夾cd2020，並在cd2020下新建資料夾data，接著在data下新增資料夾py382及 wscite432、portablegit 。 2.進入 Python 官網。 3.點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 。 4.滑至最底，找到 Windows x86-64 executable installer 並下載。 5.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382。 6.下載SciTE系統\xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n 7.建立新的start.bat及stop.bat。 \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n 8. 下載MSYS2\xa0 msys2-x86_64-20190524.exe \xa0至data下。 9. 下載PortableGit\xa0 64-bit Git for Windows Portable \xa0至\xa0 portablegit下。 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n 第三組第一次直播會議 \n 開會紀錄PDF: https://drive.google.com/openid=1R3UElFfUhid4D7hocedXO69w5lPEYi1M \n \n 作業一: 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和js演示文稿？ 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n \n 工作分配表: \n \xa0 \n Week3 \n 翻譯 http://www.coppeliarobotics.com/helpFiles/index.htm 部分內容 \n 下載PDF連結: \n https://drive.google.com/open?id=1QQAyqm9VjunnozFMYdrV4K7ktpkjgVOu \n \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': 'Week6~Week9', 'text': 'Week6 \n 第三組第二 次直播會議 \n 開會紀錄PDF連結: https://drive.google.com/open?id=1afrCAJJtArv94qnTK2zOsPor7WmpeaPH \n \n 作業二: \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊為了完成作業 1 的四輪機器人需要做些什麼 ? \n 您需要從 https://cyberbotics.com/doc/guide/index 了解什麼來實現四輪機器人？ \n \n \n 工作分配表: \n \n \xa0Week7 \n 四輪車的基本外型設置與以鍵盤控制四輪車 \n 操作影片 \n 操作步驟: 1.首先點選Add->Primitive shape->Cuboid 建立四輪車的本體，給定尺寸並將車身拉高。 2.接著點選Add->Primitive shape->Cylinder 建立四輪車的輪胎，給定尺寸並調整其方向及位置。 3.再來點選Add->Joint->Relvoute 新增馬達給予輪胎動力，調整其方向及位置。 4.接著調整馬達轉動的速率20並將結構設置好。 5.檢查本體的碰撞設置是否正確。 6.複製其輪胎並將位置及結構設置好。 7.開始進行模擬測試。 8.將四輪車的前輪馬達重新命名為right_motor及left_motor。 9.接著將寫好的子程式加入車體。 10.進行測試以鍵盤控制四輪車，即完成。 程式碼連結: https://drive.google.com/open?id=1hPSwv9J4h3P6Fh80I1mSVD3lKTEKo19z\xa0 \n Week8 第八周第三組組員直播操作: https://drive.google.com/open?id=18yUMVYWPO1HelnDyV6UMkH06MjY79Vu7 \n Python remote api 環境配置 安裝模組: 1.pip install opencv-python 2.pip install imutils 3.pip install numpy \n 解決python 3.8.2版本leo閃退問題 1.輸入pip list，檢查leo版本是否為6.1版本(是的話即輸入pip uninstall leoleo 將此版本刪除) 2.接著輸入pip install leo==6.2.1指定leo 6.2.1版本，即可正常運作。 \n V-rep更新至最新版本 \n 官方網站: https://www.coppeliarobotics.com/ 可攜版: CoppeliaSim Edu, Binaries \n Week9 Week9期中考線上課程進行步驟: \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影 \n \n 期中考報告連結: https://drive.google.com/openid=1s_BlIbVuZ5i3wZ_3MIf6KXO8b4En9LwS \n', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': 'Week10~Week14', 'text': '', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week15~Week18', 'text': '', 'tags': '', 'url': 'Week15~Week18.html'}, {'title': 'Assignment', 'text': '\n', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': 'PDF檔連結: https://drive.google.com/open?id=17OPxqxjxZZ5O4yflej72x060fdII4zVc \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Random grouping', 'text': '', 'tags': '', 'url': 'Random grouping.html'}, {'title': 'Portable system', 'text': 'Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain CMSiMDE website, Pelican blog and Reveal.js presentation on Github? \n 重新創建python3.8.2隨身系統 \n 操作影片: \n \n 操作步驟: 1.在隨身系統下新增一個資料夾cd2020，並在cd2020下新建資料夾data，接著在data下新增資料夾py382及 wscite432、portablegit 。 2.進入 Python 官網。 3.點選Downloads下的 Windows ，並點選 Latest Python 3 Release - Python 3.8.2 。 4.滑至最底，找到 Windows x86-64 executable installer 並下載。 5.開始下載，必須將pip選項取消，接著按下next並將檔案下載至資料夾py382。 6.下載SciTE系統 \xa0 full 64-bit download ，下載完後解壓縮至data下的wscite432。 \n 7.建立新的start.bat及stop.bat。 start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n 8. 下載MSYS2 \xa0 msys2-x86_64-20190524.exe \xa0至data下。 9. 下載 PortableGit\xa0 64-bit Git for Windows Portable\xa0 至\xa0 portablegit下。 10 .安裝pip，到 https://bootstrap.pypa.io/get-pip.py 頁面，另存新檔到data下。 11.執行指令 ，將python3.8.2版本缺少的模組下載下來。 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 2 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Portable system.html'}, {'title': 'Four wheel car', 'text': 'What do you need to know from  http://www.coppeliarobotics.com/helpFiles/index.htm  to implement a fourwheeled robot?   部分內容翻譯概述:   Simulation & Simulation settings dialog :  \xa0 在任何機器製作完成後，都需要進行模擬測試，以確保機器能正常運作，或者測試機器的耐用性及安全性。在這兩章節主要說明了如何建立模擬，也教了如何調整模擬的速度，這能使我們模擬起來更有效率，接著就是模擬對話框的基本操作，其中也講解了在模擬過程可能會發生的狀況及解決方法，像是模擬速度調高或調慢，會造成不穩定或不準確的模擬，反之；還有因顯示卡的效能不足而造成模擬之屏幕刷新率太慢……等。   BubbleRob tutorial :  \xa0 此教程主要在教如何設置bubbleRob機器人，在上學期我們有實際操作過，其中的內容包含如何建立模型、設置感測器、調整視覺感測器，建立模型包含機器人本體、車輪、支撐滑塊、障礙物，不只是設置模型外型及尺寸，還要設置模型的物理屬性；設置感測器則是為了偵測障礙物，讓機器人能順利避開障礙物；視覺感測器則是為了能夠讓我們在機器人模擬時觀察機器人前方狀況。   Line following BubbleRob tutorial :  \xa0在此教程中，旨在擴展 BubbleRob 的功能，以使 BubbleRob 遵循地面上的規則，也就是調整視覺感測器並設置路徑及給定程式碼，使機器人能隨著路徑運作。   External controller tutorial :  \xa0 此教程說明好幾種方式能從外部控制機器人及模擬機器人，最方便的就是編寫程式碼直接附加到場景；另外還有利用編寫插件的方法，但此方法編寫程序更加複雜；第三種就是使用遠端API，此方法非常便捷也可以使用與運行真實機器人完全相同的程式碼來控制或模擬模型（例如虛擬機器人） : 第四種方法是通過ROS節點， ROS 與遠程 API 相似，是使多個分佈式進程相互連接的便捷方法；第五種是透過BlueZero（ BØ ）節點，與 ROS 類似， BlueZero 是使多個分佈式進程相互連接的一種便捷方法，並且是一種輕量級的跨平台解決方案。   總結 :   \xa0 最後要完成四輪機器人必須了解模擬程式的操作，包含模型的設置及各模型組合、各模型的物理特性設置、感測器設置、視覺感測器設置、外部控制器的選擇及設置、路徑程式碼設置，還有模擬時會發生的狀況處理，須達到這些基本的設置才能完成四輪機器人的設計。 \n', 'tags': '', 'url': 'Four wheel car.html'}, {'title': 'Assignment2', 'text': 'https://drive.google.com/open?id=17jSIkT6aVfdJNgnMjEeU5xTDtbZOdHww \n', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Topic 0', 'text': 'Topic 0: From Digital\xa0to Industrial + Engineering Product Design Collaboration \n DigitalProductCollaboration.pdf \n 本文主要講述如何透過協同設計出更好的產品，內容介紹什麼是協同、協同為什麼很重要、如何使用設計協同工具讓協同更有效率、合作流程。 \n \xa0 其中介紹的設計協同工具，包括 : \n FlGMA: \n Figma是一個以協作為優先的共享工作區工具，  Figma 非常適合多個人在設計文件的同一區域中進行產品設計，可以觀看隊友的設計或在同一個設計上一起工作。 \n MARVEL: \n Marvel是一個更簡潔、規範和專注的空間，非常適合與非設計團隊成員進行協 作，它消除了客戶為帳戶付款或對工具進行深入了解的所有需求，客戶可以下載屏幕，並通過 Marvel 應用程序在設備環境中查看它們的運行情況。 \n ZEPLIN: \n Zeplin是一種傳遞工具，使開發人員可以深入研究設計工作的細節。 \n QUIP: \n Quip是集思廣益在產品/流程文件的絕佳平台，可以使用它來記錄和組織團隊 成員在項目上需要了解的所有環境和知識，對於集思廣益新思路而不是視覺關 注的新想法也很有用。 \n \xa0 合作流程: \n 階段 1 ： 線框和自由討論，即先有產品的框架和讓設計師、工程師自由討論。 階段 2 ： 研究與背景，即延伸產品的框架去想如何設計產品及去思考市場商機與需求。 階段3： 迭代和反饋，即匯集設計師、工程師的想法，同時確保符合客戶的期望。 階段 4 ： 客戶的反饋和發展，即從客戶的反饋及意見，而將產品以此方向改良、發展。 \n 總結: 透過本文了解了什麼是協同、協同的重要性，以協同的方式去設計產品，會更加有效率、設計出來的產品更加優良，也藉由協同的方式發覺每個人的專長及技藝，最後必須通過正確的思維方式、工具和流程、設計協調才能達到協同的目的。 \n IndustrialAndEngineeringProductDesignCollaboration.pdf \n 本文主要講述工業設計師和工程設計師如何協作，以及如何將這種合作體現在設計過程中。其中有四種類型的典型協同產品設計流程及其特徵: \n 類型 1 ： 由工業設計師主導的概念驅動過程。 類型 2 ： 由 工業設計師主導的內外聯合過程。 類型 3 ： 由工程設計師主導的由內到外的流程。 類型 4 ： 工業設計師與工程設計師協同流程。 \n \n 總結 :從本文中藉由深入採訪6個產品的34名工業設計師及工程設計師，而取得各種協同合作所需的數據，再經由這些數據設計出流程，讓整個設計流程可以更有效率。 \n', 'tags': '', 'url': 'Topic 0.html'}, {'title': 'Topic 1', 'text': 'MechanicalDesignProcess.pdf . \n Ch1  成功的設計: \n 第一章主要講述如何做出一項成功的設計，在要進行設計時必須先組成團隊，依設計的產品而決定團隊大小、產品所需的工程，接著依產品要求提出分析資料、市場調查，然後再依分析資料進行產品的設計草會與細節的調整，最後進行討論、溝通，以及最後的工程經濟分析。 \n Ch2  構建設計: \n 第二章主要講述設計產品的流程及要素，設計通常會從產品構思開始，設計方向分為三種 :  1.全新的設計 2. 延續（或增加）現有設計 3. 現有設計的重大修改，決定好方向後必須構思草圖，然後審查想法並授權進行原型製作，接著繪製（文件創建）原型製造的設想方案，再來進行原型分析、測試原型是否符合規範，再提出修訂，進行更改以改進原型（工程圖和原型），接著在進一步的分析與測試，進行第二次的修訂，最後文件製作  / 最終測試 / 最終審查 / 正式批准生產發布的設計，這些就是設計產品的流程。 然而，設計產品所需要注意的要素有最佳對象放置、間隙距離、對象排列，最佳對象放置是指可以將大多數設計視為物體在空間中的物理放置，而放置的位置是否能發揮此物體最佳功用、是否安全；間隙距離是指物體與物體之間的距離，通常依產品所需的公差進行設計；對象排列是指通過生產排列所有適合安裝在外殼中的物體的方式來最大程度地減小外殼的整體尺寸。 \n Ch3  考量結構問題: \n 第三章主要講述產品的結構問題，主要分為材料強度、結構設計過程、需求分析、靜載荷、動態負載進而討論，在設計產品時必須考量結構的問題，必須先了解產品所需的強度而去挑選適合的材料，接著必須分析材料、產品的應力、產品的扭矩、產品所受的靜載荷，其中靜載荷的問題考量非常重要，靜載荷的產生主要由 :1. 構件的體重 2. 其他成員施加的載荷 3. 由於熱效應，殘餘應力等引起的負載 而引起，靜載荷會通過施加力而導致構件失效，從而導致 :  1.超過材料的屈服強度  2. 構件的過度偏轉導致構件撓曲。 \n Ch4  材料與工藝: \n 第四章主要講述產品所需的最佳材料與工藝，產品若已經符合規格的要求，接著就必須考慮到設計的成本，再經由這些成本分析而去決定產品所用的材料與工藝，成本分析的項目包括 :  零件的材料、零件需要的表面處理、零件所需的尺寸精度、生產零件的過程、零件所需的數量、零件需要的第二次操作、零件的成本要求、該零件是否可以與設計中的另一零件組合、零件是否可做成對稱的（為了便於組裝）。而材料的選擇又分為 :  強度要求、重量要求、可靠性要求、法規要求、安全要求、熱要求、屏蔽要求（ EMI/RFI ）、金屬的兼容性要求（電腐蝕）、彈性要求（硬度計）、導電（或絕緣）要求、不透明要求、磨損要求、美學要求（觸覺、視覺）、聲學要求、紫外線（ UV ）透射和阻力要求。這些就是依產品品質與成本所需分析的項目，在進而決定需要使用到哪些工藝。 \n', 'tags': '', 'url': 'Topic 1.html'}, {'title': 'Assignment3', 'text': '', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'E-book translation content', 'text': '', 'tags': '', 'url': 'E-book translation content.html'}, {'title': 'CoppeliaSim User Manual', 'text': 'PDF連結: https://drive.google.com/file/d/1QQAyqm9VjunnozFMYdrV4K7ktpkjgVOu/view \n', 'tags': '', 'url': 'CoppeliaSim User Manual.html'}, {'title': 'DesignCollaborationBetterProducts', 'text': 'PDF連結: https://drive.google.com/open?id=1kvE7Hs0IS3Vl3BSNi_b9Vw2FyAuz8QIo \n', 'tags': '', 'url': 'DesignCollaborationBetterProducts.html'}, {'title': 'IndustrialAndEngineeringProductDesignCollaboration', 'text': 'PDF連結: https://drive.google.com/open?id=1rXziKtBaPWAV0jGWID44VoR8L4DC5oRL \n', 'tags': '', 'url': 'IndustrialAndEngineeringProductDesignCollaboration.html'}, {'title': 'MechanicalDesignProcess', 'text': 'PDF連結: https://drive.google.com/open?id=1iBYGVgiToxcX7ojaH_K9bcyrH0c_ZYxB \n', 'tags': '', 'url': 'MechanicalDesignProcess.html'}, {'title': 'MechaEducFutureNeed', 'text': 'PDF連結: https://drive.google.com/open?id=1krFCMcUm9fSGAvucUenGpOzQtTFRYD8G \n', 'tags': '', 'url': 'MechaEducFutureNeed.html'}, {'title': 'MechatronicDesignCases', 'text': 'PDF連結: https://drive.google.com/open?id=1rS3oOM3-4vzule-NYNHD_98Eu5vKpv98 \n', 'tags': '', 'url': 'MechatronicDesignCases.html'}]};