const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon')
const sidemenu = document.querySelector('.sidemenu')
const bodyLock = document.querySelector("body");

sidebarToggleBtn.addEventListener("click", function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidemenu.classList.toggle('sidemenu--active');
    bodyLock.classList.toggle("body__lock");
})
