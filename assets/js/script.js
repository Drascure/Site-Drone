document.getElementById("burger").addEventListener("click",function(){
    let menu = document.querySelector("nav ul");
    menu.classList.toggle("hide");
    menu.classList.toggle("show");
})