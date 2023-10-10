// Esta función mueve el foco al siguiente campo de entrada cuando se presiona la tecla Enter
function moveToNextInput(event, nextInputId) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById(nextInputId).focus();
    }
  }
  
  
  //La infomación de la base de datos va a cada input del formulario
  document.getElementById("serial").addEventListener("input", function() {
  var input = this.value;
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "buscar.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    var response = JSON.parse(this.responseText);
    if (response.exists) {
      document.getElementById("empresa").value = response.empresa;
     // document.getElementById("sede").value = response.sede;
      document.getElementById("departamento").value = response.departamento;
      document.getElementById("nom_usuario").value = response.nom_usuario;
      document.getElementById("fecha").value = response.fecha;
      document.getElementById("hora").value = response.hora;
      document.getElementById("activo_fijo").value = response.activo_fijo;
      document.getElementById("modelo").value = response.modelo;
      document.getElementById("fabricante").value = response.fabricante;
      document.getElementById("nom_equipo").value = response.nom_equipo;
      document.getElementById("ip_equipo").value = response.ip_equipo;
      document.getElementById("nom_procesador").value = response.nom_procesador;
      document.getElementById("ram").value = response.ram;
      document.getElementById("slot").value = response.slot;
      document.getElementById("nombre").value = response.nombre;
      document.getElementById("capacidad").value = response.capacidad;
      document.getElementById("comp_add").value = response.comp_add;
  
  
  //**************************** Select sistema operativo *************************** */
   // Obtener el elemento select
   const selectElementSo = document.getElementById("so");
     // Buscar si existe una opción con el valor de response.tipo_equipo
     let optionSo = selectElementSo.querySelector(`option[value="${response.so}"]`);
     if (!optionSo) {
     // Si no existe la opción, agregar una nueva
     optionSo = document.createElement("option");
     optionSo.value = response.so;
     optionSo.textContent = response.so;
     selectElementSo.appendChild(optionSo);
    }   
    // Establecer el atributo selected de la opción
    optionSo.selected = true;
  
    //**************************** Select tipo de equipo *************************** */
      // Este código se utiliza para cargar el combobox con los valores de la base de datos
      // Obtener el elemento select
      const selectElementTipoEquipo = document.getElementById("tipo_equipo");
     // Buscar si existe una opción con el valor de response.tipo_equipo
     let optionTipoEquipo = selectElementTipoEquipo.querySelector(`option[value="${response.tipo_equipo}"]`);
     if (!optionTipoEquipo) {
     // Si no existe la opción, agregar una nueva
     optionTipoEquipo = document.createElement("option");
     optionTipoEquipo.value = response.tipo_equipo;
     optionTipoEquipo.textContent = response.tipo_equipo;
     selectElementTipoEquipo.appendChild(optionTipoEquipo);
    }   
    // Establecer el atributo selected de la opción
    optionTipoEquipo.selected = true;
    
    //**************************** Select Sede *************************** */
      // Este código se utiliza para cargar el combobox con los valores de la base de datos
      // Obtener el elemento select
      const selectElementSede = document.getElementById("sede");
     // Buscar si existe una opción con el valor de response.sede
     let optionSede = selectElementSede.querySelector(`option[value="${response.sede}"]`);
     if (!optionSede) {
     // Si no existe la opción, agregar una nueva
     optionSede = document.createElement("option");
     optionSede.value = response.sede;
     optionSede.textContent = response.sede;
     selectElementSede.appendChild(optionSede);
    }   
    // Establecer el atributo selected de la opción
    optionSede.selected = true;
  
  
    }
  }
  };
  xhr.send("input=" + input);
  });