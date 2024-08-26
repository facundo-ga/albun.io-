function playAudio(audioId, button) {
    var audio = document.getElementById(audioId);
    audio.play();

    // Modificado: Agrega la clase flash al botón
    button.classList.add('flash');
    
    // Restaura la clase flash después de 500ms (la duración del destello)
    setTimeout(function() {
      button.classList.remove('flash');
    }, 500);
  }


  
  var currentAudio = null;

  function playAudio(audioId) {
    var audio = document.getElementById(audioId);
  
    // Detener el audio actual antes de reproducir uno nuevo
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  
    audio.play();
    currentAudio = audio;
  
    // Agrega la clase flash al botón
    var button = document.querySelector('[data-audio-id="' + audioId + '"]');
    button.classList.add('flash');
  
    // Restaura la clase flash después de 500ms (la duración del destello)
    setTimeout(function () {
      button.classList.remove('flash');
    }, 500);
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    function checkOrientation() {
      if (window.innerHeight > window.innerWidth) {
        // Modo portrait
        document.getElementById("rotate-message").style.display = "flex";
      } else {
        // Modo landscape
        document.getElementById("rotate-message").style.display = "none";
      }
    }
  
    window.addEventListener("resize", checkOrientation);
    checkOrientation(); // Verifica la orientación al cargar la página
  });
  

 