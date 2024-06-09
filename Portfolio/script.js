document.querySelector(".fa-bars").addEventListener("click",function () {
    document.querySelector(".menu ul").classList.add("active-menu");
})
document.querySelector(".fa-xmark").addEventListener("click",function () {
    document.querySelector(".menu ul").classList.remove("active-menu");
})
 for (let i = 0; i < document.querySelectorAll(".menu-list").length; i++) {
    document.querySelectorAll(".menu-list")[i].addEventListener("click",function () {
        document.querySelector(".menu ul").classList.remove("active-menu");
    })
    
 }