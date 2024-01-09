/**
    * @description      : 
    * @author           : DominuSoft
    * @group            : 
    * @created          : 05/12/2023 - 16:31:01
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/12/2023
    * - Author          : DominuSoft
    * - Modification    : 
**/

let lastScrollTop = 0;
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-65px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

function changeBg() {
    let navbar = document.getElementById("navbar");
    let changeVl = window.scrollY;
    if (changeVl < 150) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changeBg);

// document.getElementById('viewMapBtn').addEventListener('click', function () {
//     let trunkMapContent = document.getElementById('trunkMapContent');
//     // Toggle the display of the additional content
//     trunkMapContent.style.display = trunkMapContent.style.display === 'none' ? 'block' : 'none';
// });

function hiddenParagraf() {
    let p = document.getElementById('hiddenContent');
    let button = document.getElementById("buttonAbout")
    if (p.style.display === 'block') {
        p.style.display = 'none';
        button.textContent = "Read More"

    } else {
        p.style.display = 'block';
        button.textContent = "Read Less"
    }
}
document.getElementById("yearCopy").textContent = new Date().getFullYear()