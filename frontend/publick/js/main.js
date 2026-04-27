// گرفتن المنت‌ها
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// باز کردن منو
function openMenu() {
  sideMenu.classList.add("active");
  document.body.style.overflow = "hidden"; // جلوگیری از اسکرول صفحه پشت منو
}

// بستن منو
function closeMenu() {
  sideMenu.classList.remove("active");
  document.body.style.overflow = ""; // برگشت اسکرول به حالت عادی
}

// چک کردن اینکه المنت وجود داره یا نه (برای جلوگیری از خطا)
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", openMenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMenu);
}

// بستن منو با کلیک روی هر جای دیگه از صفحه (بیرون منو)
window.addEventListener("click", function (event) {
  // اگه منو باز هست و کلیک روی خود منو یا دکمه همبرگر یا دکمه بستن نبوده
  if (sideMenu && sideMenu.classList.contains("active")) {
    // چک کنه که کلیک روی المنت‌های زیر نباشه:
    // - خود منو (sideMenu)
    // - دکمه همبرگر
    // - دکمه بستن
    if (
      !sideMenu.contains(event.target) &&
      hamburgerBtn &&
      !hamburgerBtn.contains(event.target) &&
      closeMenuBtn &&
      !closeMenuBtn.contains(event.target)
    ) {
      closeMenu();
    }
  }
});

// جلوگیری از بسته شدن منو وقتی داخل خود منو کلیک میشه
if (sideMenu) {
  sideMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

//برای بازشدن محصولات
// گالری محصولات - باز و بسته شدن با کلیک
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".collection-gallery");
  const pictures = document.querySelectorAll(".main-picture");

  if (gallery) {
    // کلیک روی هر محصول
    pictures.forEach((picture) => {
      picture.addEventListener("click", function (e) {
        e.stopPropagation(); // جلوگیری از传播 به گالری

        // اضافه کردن کلاس open برای باز شدن محصولات
        gallery.classList.add("open");
      });
    });

    // کلیک روی هر جای دیگه از صفحه برای بستن
    document.addEventListener("click", function (e) {
      // اگر کلیک روی گالری یا داخل محصولات نبود
      if (!gallery.contains(e.target)) {
        // حذف کلاس open برای برگشت به حالت اولیه
        if (gallery.classList.contains("open")) {
          gallery.classList.remove("open");
        }
      }
    });

    // اختیاری: کلیک روی خود گالری (فضای خالی) هم ببنده
    gallery.addEventListener("click", function (e) {
      // اگر دقیقاً روی خود گالری کلیک شده باشه
      if (e.target === gallery && gallery.classList.contains("open")) {
        gallery.classList.remove("open");
      }
    });
  }
});
