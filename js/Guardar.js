    // Obtén una referencia al icono
    var icon = document.getElementById('check-icon');

    // Agrega un manejador de eventos para el clic en el icono
    icon.addEventListener('click', function() {
        // Agrega una clase para iniciar la animación
        icon.classList.add('animated');

        // Espera un tiempo para que se ejecute la animación y luego elimina la clase
        setTimeout(function() {
            icon.classList.remove('animated');
        }, 1000); // 1000 milisegundos (1 segundo) es la duración de la animación
    });