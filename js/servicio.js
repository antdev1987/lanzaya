let styleToggle = true

const servicio = document.querySelector('.servicio');

const content = document.querySelector('.dropdown__content');

servicio.addEventListener('click', () => {
  content.style.display = styleToggle ? 'grid' : "";

  content.style.maxHeight = styleToggle ? '9999px' : "";


  styleToggle = !styleToggle;
});
