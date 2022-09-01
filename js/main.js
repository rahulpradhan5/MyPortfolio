const mobileNav = document.querySelector(".mobile-nevbar");
const navbar = document.querySelector(".nevbar")
const toggleNavbar = () =>{
    // alert("hi");
    navbar.classList.toggle("active");
};
mobileNav.addEventListener('click', ()=> toggleNavbar());