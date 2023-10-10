
//Función actualizar la hora en timpo real 
 function actualizarHora() {
 const campoHora = document.getElementById('hora');
 const ahora = new Date();
 let hora = ahora.getHours();
 const minutos = ahora.getMinutes().toString().padStart(2, '0');
 const segundos = ahora.getSeconds().toString().padStart(2, '0');
 const ampm = hora >= 12 ? 'PM' : 'AM';

 hora = hora % 12 || 12; // Convertir a formato de 12 horas

 const horaActual = `${hora}:${minutos}:${segundos} ${ampm}`;
 
 campoHora.value = horaActual;
}

// Actualizar la hora cada segundo (1000 milisegundos)
setInterval(actualizarHora, 1000);

// Llamar a la función para configurar la hora inicial
actualizarHora();
