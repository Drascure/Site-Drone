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
       /*  // au click creation d'un sous menu
        liPrincipal.addEventListener("click", () => {
            //verification d'un sous menu existant avec son id
            if (!document.body.contains(document.querySelector("#subUl" + index))) {
                //pour chaque élément, s'il existe, on le supprime
                for (let i = 0; i < menuEntries.length; i++) {
                    if (document.body.contains(document.querySelector("#subUl" + i))) {
                    document.querySelector("#subUl" + i).remove();                    
                }
            }
            const subUl = document.createElement("ul");
            subUl.id = "subUl" + index;
            liPrincipal.append(subUl);
            menuEntries[index].subMenu.forEach(subelem => {
                const subLi = document.createElement("li");
                subLi.innerText = subelem.subName;
                subUl.append(subLi);
            })
            } else {
                //si l'élément existe déjà, on le supprime
                document.querySelector("#subUl" + index).remove();                
            }

            //verification d'un sous menu existant avec son id
        })
 */
    });
}

export { initMenu }

//si je souhaite leur appliquer un effet, je met un setTime Out