const carousel = document.querySelector(".carousel");
let currdeg = 0;

document.querySelector(".next").addEventListener("click", (e) => rotate(e, "n"));
document.querySelector(".prev").addEventListener("click", (e) => rotate(e, "p"));

function rotate(e, direction) {
  if (direction === "n") {
    currdeg = currdeg - 90;
  }
  if (direction === "p") {
    currdeg = currdeg + 90;
  }

  carousel.style.transform = `rotateY(${currdeg}deg)`;
  carousel.style.webkitTransform = `rotateY(${currdeg}deg)`;
  carousel.style.mozTransform = `rotateY(${currdeg}deg)`;
  carousel.style.oTransform = `rotateY(${currdeg}deg)`;
}

export {rotate};