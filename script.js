document.addEventListener('DOMContentLoaded', () => {
    // Obtención de elementos del formulario y la tabla para personajes
    const formCharacter = document.getElementById('formCharacter');
    const inputCharacter = document.getElementById('inputCharacter');
    const tbodyCharacter = document.getElementById('tbodyCharacter');

    // Manejador del evento de envío del formulario para buscar personajes
  formCharacter.addEventListener('submit', async (e) => {
    e.preventDefault();
    const characterName = inputCharacter.value.trim();
    if (characterName === '') {
      alert('Por favor, ingresa el nombre del personaje');
      return;
    }
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        mostrarPersonajes(data.results);
      } else {
        alert('Error ingrese un dato válido');
      }
    } catch (error) {
      alert('Error ingrese lo que se le pide en el campo');
      console.log(error);
    }
  });

  // Obtención de elementos del formulario y la tabla para ubicaciones
  const formLocation = document.getElementById('formLocation');
  const inputLocation = document.getElementById('inputLocation');
  const tbodyLocation = document.getElementById('tbodyLocation');

  // Manejador del evento de envío del formulario para buscar ubicaciones
  formLocation.addEventListener('submit', async (e) => {
    e.preventDefault();
    const locationName = inputLocation.value.trim();
    if (locationName === '') {
      alert('Por favor, ingresa el nombre de la ubicación');
      return;
    }
    const url = `https://rickandmortyapi.com/api/location/?name=${locationName}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        mostrarUbicaciones(data.results);
      } else {
        alert('Error ingrese un dato válido');
      }
    } catch (error) {
      alert('Por favor, ingrese lo que se le pide en el campo');
      console.log(error);
    }
  });