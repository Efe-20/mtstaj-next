window.addEventListener("load", function () {
  const mobileButton = document.querySelector(".hamberger-button");
  const mobileMenu = document.querySelector(".popup-mobile-menu");
  const mobileMenuClose = mobileMenu.querySelector(".close-button");
  if (mobileButton)
    mobileButton.addEventListener("click", function () {
      mobileMenu.classList.add("active");
    });

  if (mobileMenuClose)
    mobileMenuClose.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
});




