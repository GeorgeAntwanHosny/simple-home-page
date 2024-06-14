const closeMobileMenu = () => {
  let mobile_menu = document.getElementById("menu-mobile");
  mobile_menu.style.display = "none";
};
const openMobileMenu = () => {
  let mobile_menu = document.getElementById("menu-mobile");
  mobile_menu.style.display = "block";
};
document.addEventListener("DOMContentLoaded", function () {
  let simpleText = document.getElementById("simpleText");
  simpleText.innerHTML = simpleText.innerText.toUpperCase();

  let close_menu_button = document.getElementById("close-mobile-menu");
  close_menu_button.addEventListener("click", function () {
    closeMobileMenu();
  });
  let open_menu_button = document.getElementById("open-mobile-menu");
  open_menu_button.addEventListener("click", function () {
    openMobileMenu();
  });

  

  // Check localStorage for saved theme
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark-mode") {
    document.body.classList.add(currentTheme);
  } else if (currentTheme) {
    document.body.classList.remove(currentTheme);
  }
  
  let toggleThemButtons = document.querySelectorAll(".theme-toggle-action");
  toggleThemButtons.forEach(toggleButton=>
  // Toggle theme and save to localStorage
  toggleButton.addEventListener("click", () => {
    console.log("toggel");
    document.body.classList.toggle("dark-mode");
    let theme = "light-mode";
    if (document.body.classList.contains("dark-mode")) {
      theme = "dark-mode";
    }
    localStorage.setItem("theme", theme);
  }))

  
});
