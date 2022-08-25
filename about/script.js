document.addEventListener("DOMContentLoaded", () =>{
    window.setTimeout(function(){
        document.body.className = ''
    }, 500);
});

//mobile menu
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
  } /*for when the user opens the hamburger menu*/