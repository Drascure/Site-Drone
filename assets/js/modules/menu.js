import { menuEntries } from "./menuEntries.js";

const initMenu = () => {
    const ulPrincipal = document.createElement("ul");
    document.querySelector("#menu").append(ulPrincipal);
    menuEntries.forEach((element, index) => {
        let htmlElem;
        if (!element.link) {
            htmlElem = "div";
        }else{
            htmlElem = "a";
        }
        const aLi = document.createElement(htmlElem);
        aLi.href = "./" + element.link;
        ulPrincipal.append(aLi);
        const liPrincipal = document.createElement('li');
        liPrincipal.id = "liPrincipal" + index;
        liPrincipal.textContent = element.name;
        aLi.append(liPrincipal);
    });
}

export { initMenu }