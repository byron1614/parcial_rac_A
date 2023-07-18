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