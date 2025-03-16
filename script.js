// Agrega interactividad a los elementos de proyectos
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.backgroundColor = '#e9f5ff'; // Cambiar a azul claro al pasar el mouse
    });
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = '#fff'; // Volver al color blanco
    });
  });
  
  // Mostrar mensaje de bienvenida en la consola
  console.log("Bienvenido a mi portafolio interactivo!");