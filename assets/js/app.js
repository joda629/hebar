// * capture id of the menu icon
let menuIcon = document.getElementById("menuIcon")
// * capture id of menu list
let list = document.getElementById("list")
,   links = document.querySelectorAll(".list-link")
,   menuMobile = document.querySelector(".menuMobile")
,   btnInner = document.querySelector(".btnInner")
,   btnMenu = document.querySelector(".btnMenu")
,   title   = document.getElementById("title")
,   navbar = document.querySelector(".nav")

menuIcon.addEventListener("click", function(e)
{
    // to add class active the efect
    this.classList.toggle("is-active")
    menuMobile.classList.toggle("show")
    
    
    if (menuMobile.classList.contains("show"))
    {
        document.body.style.overflow = "hidden" 
        title.classList.add("titleModificated")
        btnInner.classList.add("btnInnerModificated")
        btnMenu.style.borderColor = "#fff "
        navbar.style.borderColor = "#fff"
    }
    else 
    {
        title.classList.remove("titleModificated")
        btnInner.classList.remove("btnInnerModificated")
        navbar.style.borderColor = ""
        btnMenu.style.borderColor = ""
        document.body.style.overflowY = "auto" 
    }


})

window.addEventListener("scroll", e =>
{
    let middle = document.body.scrollHeight / 2
    ,   oldColor = "f0e6df"
    ,   newColor = "E0EDDC"
    document.body.style.backgroundColor = `#${oldColor}`
    if (pageYOffset >= (middle - 100))
    {
        document.body.style.backgroundColor = `#${newColor}`
    }
})




// ScrollReveal().reveal('.try', {  distance: '1000px',delay: 1000 });