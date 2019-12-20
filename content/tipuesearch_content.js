var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Solvespace', 'text': '編譯過程 \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git version 查驗 git 版本 ( 需要git 2.13 版本以上 ) \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n (將子模組中的資料全部取下放在solvespace的資料夾中) \n 上述指令同: \n git clone  https://github.com/solvespace/solvespace.git \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n (原本會尋找713和714行但因為無法編譯所以將其註解掉) \n (在windows中的動態資料庫裡就有了，若有需要再給它即可) \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄) \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n mingw32-make \n 將libpng.dll.a重新命名為libpng_static.a並且複製到 Y:\\msys64\\mingw64\\lib \n 完成後若solvespace.exe可順利打開即成功 \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'NX12', 'text': '第5章起草 \n NX 12 Drafting應用程序使您可以創建工程圖，視圖，幾何形狀，尺寸和 起草製造所需的註釋以及對工業設計的理解。 \n 本章的目的是為設計人員/製圖員提供有關起草工具的足夠知識，以便 創建其設計的基本圖紙。 \n 製圖應用程序支持工程製圖符合ANSI標準的模型。 \n 在解釋了起草申請的基礎之後，我們將逐步介紹起草一些先前創建的模型的方法。 \n 5.1概述 \n 製圖應用程序旨在允許您制定和維護行業標準 \n 直接從3D模型或裝配零件製造工程圖。 \n 在中創建的工程圖製圖應用程序與模型完全相關，對模型所做的任何更改都與自動反映在工程圖中。 \n Drafting應用程序還提供了一組2D繪圖滿足2D中心設計和佈局要求的工具。 \n 您可以製作獨立的2D工程圖。繪圖應用程序基於如下圖所示的實體模型創建視圖。 \n 通過繪圖，可以輕鬆地創建具有正交視圖，剖面圖，導入視圖，輔助視圖，尺寸和其他註釋。 \n 製圖應用程序的一些有用功能包括： \n 1）選擇第一個視圖後，可以添加其他正交視圖並對齊 只需單擊幾個按鈕。 \n 2）每個視圖都直接與實體關聯。 因此，當更改實體時， 圖紙將隨視圖和尺寸一起直接更新。 \n 3）草稿註釋（尺寸，標籤和帶引線的符號）直接放置在 工程圖，並在更改實體時自動更新。 \n 我們將逐步介紹如何創建視圖以及如何使用和修改註釋例子。 \n 5.2創建草稿', 'tags': '', 'url': 'NX12.html'}]};