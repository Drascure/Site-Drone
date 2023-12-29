import { menuEntries } from "./modules/menuEntries.js";
import { initMenu } from "./modules/menu.js";

globalThis.menuEntries = menuEntries;
initMenu("#menu");
const menuUl = document.querySelector("#menu ul")


document.querySelector("#burger").addEventListener("click", ()=>{
    menuUl.classList.toggle("hide");
    menuUl.classList.toggle("show");
})
