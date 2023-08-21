let UbicacionPrincipal = window.pageYOffset;

let header = document.querySelector("#navegacion");

window.onscroll = function () {
  let DesplazamientoActual = window.pageYOffset;

  if (UbicacionPrincipal >= DesplazamientoActual) {
    header.style.cssText =
      "top:0;animation:SlideIn 300ms ease-in-out;z-index:999;";
  } else {
    header.style.cssText = "top:-100px;";
  }

  UbicacionPrincipal = DesplazamientoActual;
};
