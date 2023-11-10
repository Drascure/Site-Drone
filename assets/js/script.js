import { menuEntries } from "./modules/menuEntries.js";
import { initMenu } from "./modules/menu.js";

globalThis.menuEntries = menuEntries;
initMenu();
const menuUl = document.querySelector("#menu ul")


document.querySelector("#burger").addEventListener("click", ()=>{
    menuUl.classList.toggle("hide");
    menuUl.classList.toggle("show");
})
