const sheets = document.querySelectorAll(".sheet");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentPage = document.getElementById("currentPage");


// ========================================
// 目前所在頁
//
// 0 = 封面
// 1 = 第 1 頁
// 2 = 第 2 頁
// ...
// 6 = 第 6 頁
// ========================================

let currentPageIndex = 0;


// ========================================
// 總頁數
// ========================================

const totalPages = sheets.length - 1;


// ========================================
// 下一頁
// ========================================

function nextPage() {

    // 已經最後一頁
    if (currentPageIndex >= totalPages) {
        return;
    }


    /*
        currentPageIndex = 0

        第一次：

        封面
          ↓
        rotateY(-180deg)

        所以看到第 1 頁
    */

    const sheet = sheets[currentPageIndex];

    sheet.classList.add("flipped");


    currentPageIndex++;


    updateUI();
}


// ========================================
// 上一頁
// ========================================

function prevPage() {

    // 已經在封面
    if (currentPageIndex <= 0) {
        return;
    }


    /*
        假設現在：

        封面 ✓
        01 ✓
        02 ✓
        03 ← 現在

        currentPageIndex = 3

        要回去：

        03 翻回來
    */


    currentPageIndex--;


    const sheet = sheets[currentPageIndex];

    sheet.classList.remove("flipped");


    updateUI();
}


// ========================================
// 更新 UI
// ========================================

function updateUI() {

    // 封面
    if (currentPageIndex === 0) {

        currentPage.textContent = "封面";

        prevBtn.disabled = true;

        nextBtn.disabled = false;

        nextBtn.textContent = "下一頁 →";

        return;
    }


    // 最後一頁
    if (currentPageIndex === totalPages) {

        currentPage.textContent =
            String(currentPageIndex).padStart(2, "0");

        prevBtn.disabled = false;

        nextBtn.disabled = true;

        nextBtn.textContent = "讀完了";

        return;
    }


    // 中間頁面

    currentPage.textContent =
        String(currentPageIndex).padStart(2, "0");

    prevBtn.disabled = false;

    nextBtn.disabled = false;

    nextBtn.textContent = "下一頁 →";
}


// ========================================
// 鍵盤控制
// ========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {

            nextPage();

        }


        if (event.key === "ArrowLeft") {

            prevPage();

        }

    }
);


// ========================================
// 初始化
// ========================================

updateUI();