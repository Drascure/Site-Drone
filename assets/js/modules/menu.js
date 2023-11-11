import { menuEntries } from "./menuEntries.js";

const initMenu = (idDiv) => {
    const ulPrincipal = document.createElement("ul");
    if (idDiv = "#menu") {
        ulPrincipal.classList.add("hide");
    }
    document.querySelector(idDiv).append(ulPrincipal);
    menuEntries.forEach((element) => {
        let htmlElem;
        //vérification de l'existence du lien
        if (!element.link) {
            htmlElem = "div";
        }else{
            htmlElem = "a";
        }
        const aLi = document.createElement(htmlElem);
        aLi.href = "./" + element.link + ".html";
        ulPrincipal.append(aLi);
        const liPrincipal = document.createElement('li');
        liPrincipal.id = idDiv + element.link;
        liPrincipal.textContent = element.name;
        aLi.append(liPrincipal);
    });
}

export { initMenu }