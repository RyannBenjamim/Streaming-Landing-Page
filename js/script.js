var menu = document.querySelector('header .sec01 ul');
var mobileBtn = document.querySelector('header .sec01 .menu-mobile');
var mobileBtnImg = document.querySelector('header .sec01 .menu-mobile i');

mobileBtn.addEventListener('click', function() {
    if (mobileBtnImg.getAttribute("class") == "fa-solid fa-bars") {
        mobileBtnImg.setAttribute("class", "fa-solid fa-circle-xmark");
    } else {
        mobileBtnImg.setAttribute("class", "fa-solid fa-bars")
    }
    
    menu.classList.toggle('active');
});