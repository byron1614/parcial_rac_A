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

    // Obtención de elementos del formulario y la tabla para episodios
    const formEpisode = document.getElementById('formEpisode');
    const inputEpisode = document.getElementById('inputEpisode');
    const tbodyEpisode = document.getElementById('tbodyEpisode');
  
    // Manejador del evento de envío del formulario para buscar episodios
    formEpisode.addEventListener('submit', async (e) => {
      e.preventDefault();
      const episodeValue = inputEpisode.value.trim();
      if (episodeValue === '') {
        alert('Por favor, ingresa el número del episodio');
        return;
      }
      const url = `https://rickandmortyapi.com/api/episode/?episode=${episodeValue}`;
  
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          mostrarEpisodios(data.results);
        } else {
          alert('Error en la consulta, por favor ingrese un número de episodio válido');
        }
      } catch (error) {
        alert('Error en la consulta a la API');
        console.log(error);
      }
    });

    // Función para mostrar los personajes en la tabla
  const mostrarPersonajes = (personajes) => {
    tbodyCharacter.innerHTML = '';

    personajes.forEach((personaje) => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      idCell.textContent = personaje.id;
      const nombreCell = document.createElement('td');
      nombreCell.textContent = personaje.name;
      const especieCell = document.createElement('td');
      especieCell.textContent = personaje.species;
      const generoCell = document.createElement('td');
      generoCell.textContent = personaje.gender;
      const estadoCell = document.createElement('td');
      estadoCell.textContent = personaje.status;
      const imagenCell = document.createElement('td');
      const imagen = document.createElement('img');
      imagen.src = personaje.image;
      imagen.alt = personaje.name;
      imagenCell.appendChild(imagen);

      row.appendChild(idCell);
      row.appendChild(nombreCell);
      row.appendChild(especieCell);
      row.appendChild(generoCell);
      row.appendChild(estadoCell);
      row.appendChild(imagenCell);

      tbodyCharacter.appendChild(row);
    });
  };

   // Función para mostrar las ubicaciones en la tabla
   const mostrarUbicaciones = (ubicaciones) => {
    tbodyLocation.innerHTML = '';

    ubicaciones.forEach((ubicacion) => {
      const row = document.createElement('tr');
      const idCell = document.createElement('td');
      idCell.textContent = ubicacion.id;
      const nombreCell = document.createElement('td');
      nombreCell.textContent = ubicacion.name;
      const tipoCell = document.createElement('td');
      tipoCell.textContent = ubicacion.type;
      const dimensionCell = document.createElement('td');
      dimensionCell.textContent = ubicacion.dimension;

      row.appendChild(idCell);
      row.appendChild(nombreCell);
      row.appendChild(tipoCell);
      row.appendChild(dimensionCell);

      tbodyLocation.appendChild(row);
    });
  };