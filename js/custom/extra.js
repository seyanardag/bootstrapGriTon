const disappearAll = document.querySelectorAll('.clickDisappear')
function closeCanvas() {
    setTimeout(() => {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click()
    }, 1000);
}
for (let i = 0; i < disappearAll.length; i++) {
    disappearAll[i].addEventListener("click", closeCanvas)
}


// const navItems = document.getElementsByClassName('nav-item')

// for (let index = 0; index < navItems.length; index++) {
//     const element = navItems[index];
//     element.addEventListener('click', (e) => {
//         for (let index = 0; index < navItems.length; index++) {
//             const el = navItems[index];
//             el.classList.remove('activeLink')
//         }
//         element.classList.add('activeLink')
//     }
//     )
// }


document.addEventListener('DOMContentLoaded', function () {
const navItems2 = document.querySelectorAll('.nav-link')

const onscroll = () => {
const scrollPosition = window.scrollY

navItems2.forEach(link => {
    const section = document.querySelector(link.hash)
    sectionTopPosition = section.offsetTop
  
    if (scrollPosition + 50 >= sectionTopPosition && sectionTopPosition+section.offsetHeight> scrollPosition+0) {
       console.log('menzilde')
       navItems2.forEach(item => {
        item.parentElement.classList.remove('activeLink')
       });
       link.parentElement.classList.add('activeLink')
    } else {
        link.parentElement.classList.remove('activeLink')
    }
});
}
window.addEventListener('scroll',onscroll )
}); 