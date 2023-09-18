// const kijelzo = document.querySelector("#kijelzo");
// let rotationAngle = 0;
// var szam = 0;
// function szamol(){
//     kijelzo.innerHTML = szam.toString();
//     szam+=1;
// }
//  function rotateImage() {
//      rotationAngle += 1;
// image.style.transform = `rotate(${rotationAngle}deg)`;
// }
// const timer = setInterval(rotateImage, 50);
// setInterval(szamol,1000);
// setInterval(rotation,1000);

// Az animálni kívánt kép elem kiválasztása
// Az animálni kívánt kép elem kiválasztása
// Az animálni kívánt kép elem kiválasztása
// Az animálni kívánt kép elem kiválasztása
// Az animálni kívánt kép elem kiválasztása
const image = document.getElementById("movingImage");

// A kép kezdeti pozíciója (bal felső sarok)
let topPosition = 0;
let leftPosition = 0;
let directionX = 1; // X irányú mozgásirány (jobbra)
let directionY = 1; // Y irányú mozgásirány (lefelé)

// Animációs időzítő
const animationInterval = setInterval(() => {
  // Mozgatjuk a képet jobbra vagy balra az X tengelyen csak, ha a kép a monitor szélén van
  leftPosition += 5 * directionX;
  // Mozgatjuk a képet lefelé vagy felfelé az Y tengelyen csak, ha a kép a monitor szélén van
  topPosition += 5 * directionY;

  // Beállítjuk az új pozíciót
  image.style.left = leftPosition + "px";
  image.style.top = topPosition + "px";

  // Ha a kép eléri a monitor szélét egy adott irányban, megváltoztatjuk az irányt
  if (leftPosition <= 0 || leftPosition >= window.innerWidth - image.width) {
    directionX *= -1; // X irány megfordítása
  }
  if (topPosition <= 0 || topPosition >= window.innerHeight - image.height) {
    directionY *= -1; // Y irány megfordítása
  }
}, 50); // 50 ms-enként mozgatjuk a képet




const kijelzo = document.querySelector("#kijelzo");
let rotationAngle = 0;
var szam = 0;
function szamol(){
    kijelzo.innerHTML = szam.toString();
    szam+=1;
}

setInterval(szamol,1000);
setInterval(rotation,1000);