const textoElements = document.querySelectorAll("[data-texto]");

textoElements.forEach((textoElement) => {
  const textoAnimado = textoElement.getAttribute("data-texto");
  let charIndex = 0;

  textoElement.textContent = ''; // Limpiar el contenido inicial

  function escribirTexto() {
    if (charIndex < textoAnimado.length) {
      textoElement.textContent += textoAnimado.charAt(charIndex);
      charIndex++;
      setTimeout(escribirTexto, 90); // Velocidad de escritura
    }
  }

  escribirTexto();
});
