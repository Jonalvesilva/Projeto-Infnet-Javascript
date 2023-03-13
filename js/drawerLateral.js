let menu = document.querySelector(".app-bar-subtitle-menuDrawer");
let drawer = document.querySelector(".drawer-lateral");
let drawerLink = document.querySelectorAll('.linkSection');

function mostrarDrawer(drawer) {

  if (drawer.className === "drawer-lateral") {
    drawer.className = drawer.className + " active";
  } else {
    drawer.className = "drawer-lateral";
  }

}

menu.onclick = () => mostrarDrawer(drawer);

drawerLink.forEach((element) => {
  element.style.textDecoration = "none";
  element.style.color = "black";
  element.style.fontSize = "12px";
  element.onclick = () => mostrarDrawer(drawer);
})

