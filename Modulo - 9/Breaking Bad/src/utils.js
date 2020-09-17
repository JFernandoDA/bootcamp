const createCharacterRow = character => {
    const element = document.createElement("div");
  
    const avatar = createAvatar(character);
    element.appendChild(avatar);
  
    const link = createRowText(character);
    element.appendChild(link);
  
    element.className = "character-row";
  
    return element;
  };
  
  const createAvatar = character => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.img;
  
    return element;
  };
  
  const createRowText = character => {
    const element = document.createElement("span");
    element.append(character.name);
  
    return element;
  };
  
  const createAvatarDetail = character => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character.img;
  
    return element;
  };
  
  const showCharacter = (character) => {
    console.log("character", character);
   
    const characterDetail = document.getElementById("character-detail");
  
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(
      createParagraph("Birthday: " + character.birthday)
    );
    characterDetail.appendChild(
      createParagraph("Nickname: " + character.nickname)
    );
  };

  const createParagraph = text => {
    const element = document.createElement("p");
    element.append(text);
    return element;
  };
  
  //función para mostrar la frase célebre del personaje en el cuadro de detalle de este. es llamada desde index.js
  const showQuote = (quote) => {
    const characterDetail = document.getElementById("character-detail");

    characterDetail.appendChild(
      createParagraph("Quote: " + quote)
    );
  }


//función que se llama desde index.js por cada episodio del array episodios y rellena una línea con id, título y temporada
  const createEpisodeRow = episode =>{
    
    const container = document.createElement("div"); //Se crea un DIv para almacenar la info del episodio
    const root = document.getElementById("episodes-list"); //recuperamos el contenedor de la lista de episodios
    root.appendChild(container); //y se hace hijo de este

    const ide = createEpisodeId (episode) //se llama  función que crea el span con el número del spisodio
    container.appendChild(ide); //y se hace hijo del contenedor de ese episodio
    
    const title = createEpisodeTitle(episode) //se llama  función que crea el span con el título del spisodio
    container.appendChild(title); //y se hace hijo del contenedor de ese episodio

    const season = createEpisodeSeason(episode); //se llama  función que crea el span con la temporada del spisodio
    container.appendChild(season); //y se hace hijo del contenedor de ese episodio

  }

  //función para crear un span con el número del episodio, dicho span se devuelve al final
  const createEpisodeId =(episode) => {
      const epiId = document.createElement("span");
      epiId.innerHTML= episode.episode_id;
      return epiId;
  }
  
  //función para crear un span con el título del episodio, dicho span se devuelve al final
  const createEpisodeTitle =(episode) => {
      const title = document.createElement("span");
      title.innerHTML= "    ---    "+episode.title;
      return title;
  }

  //función para crear un span con la temporada a la que pertenece el episodio, dicho span se devuelve al final
  const createEpisodeSeason =(episode) => {
      const season = document.createElement("span");
      season.innerHTML= "    ---   Season: "+episode.season;
      return season;
  }
  
  export { createCharacterRow, showCharacter, createEpisodeRow, showQuote }; //Exportamos las funciones necesarias
  