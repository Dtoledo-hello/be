// obtener todos los botones "Ver video"
var videoButtons = document.querySelectorAll(".video-link");
        
// agregar un evento de clic a cada botón "Ver video"
videoButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    event.preventDefault(); // evitar que el enlace se abra
    // obtener el enlace del video correspondiente al botón presionado
    var videoUrl = this.getAttribute("data-video");

    // actualizar el src del iframe del modal con el enlace del video
    var iframe = document.querySelector("#exampleModal iframe");
    iframe.setAttribute("src", videoUrl);

    // mostrar el modal
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  });
});