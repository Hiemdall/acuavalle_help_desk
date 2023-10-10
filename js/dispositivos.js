
//Ventana emergente diagnostico
function diagnostico() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';

    var popupTexts = popup.getElementsByTagName('p');
    for (var i = 0; i < popupTexts.length; i++) {
      popupTexts[i].addEventListener('click', function() {
        document.getElementById('observacion').value = this.innerText;
        popup.style.display = 'none';
      });
    }
    document.getElementById('cerrar').addEventListener('click', function() {
    popup.style.display = 'none';
});
}

//Ventana emergente soluciones
function agregarRecomendacion() {
  var popup1 = document.querySelector('.popup1');
  popup1.style.display = 'block';

  var popupTexts1 = popup1.getElementsByTagName('p');
  for (var i = 0; i < popupTexts1.length; i++) {
    popupTexts1[i].addEventListener('click', function() {
      document.getElementById('recomendaciones').value = this.innerText;
      popup1.style.display = 'none';
    });
  }

  document.getElementById('cerrar1').addEventListener('click', function() {
    popup1.style.display = 'none';
  });
}

//Ventana emergente repuestos
function agregarRepuesto() {
  var popup2 = document.querySelector('.popup2');
  popup2.style.display = 'block';

  var popupTexts2 = popup2.getElementsByTagName('p');
  for (var i = 0; i < popupTexts2.length; i++) {
    popupTexts2[i].addEventListener('click', function() {
      document.getElementById('detalle').value = this.innerText;
      popup2.style.display = 'none';
    });
  }

  document.getElementById('cerrar2').addEventListener('click', function() {
    popup2.style.display = 'none';
  });
}


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
    //document.getElementById("sede").value = response.sede;
    document.getElementById("nombre").value = response.nombre;
    document.getElementById("departamento").value = response.departamento;
    document.getElementById("fecha").value = response.fecha;
    document.getElementById("hora").value = response.hora;
    document.getElementById("activo_fijo").value = response.activo_fijo;
    document.getElementById("modelo").value = response.modelo;
    document.getElementById("fabricante").value = response.fabricante;
    document.getElementById("ip_equipo").value = response.ip_equipo;
    document.getElementById("observacion").value = response.observacion;
    document.getElementById("recomendaciones").value = response.recomendaciones;
    document.getElementById("detalle").value = response.detalle;
    

    
    // Checkbox de repuesto
    var repuestoCheckbox = document.getElementById("repuesto");
        if (response.repuesto === "Sí") {
          repuestoCheckbox.checked = true;
        } else {
          repuestoCheckbox.checked = false;
        }

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

  //**************************** Select tipo de mantenimiento *************************** */
   // Este código se utiliza para cargar el combobox con los valores de la base de datos
    // Obtener el elemento select
    const selectElementTipo_mant = document.getElementById("tipo_mant");
   // Buscar si existe una opción con el valor de response.tipo_mant
   let optionTipo_mant = selectElementTipo_mant.querySelector(`option[value="${response.tipo_mant}"]`);
   if (!optionTipo_mant) {
   // Si no existe la opción, agregar una nueva
   optionTipo_mant = document.createElement("option");
   optionTipo_mant.value = response.tipo_mant;
   optionTipo_mant.textContent = response.tipo_mant;
   selectElementTipo_mant.appendChild(optionTipo_mant);
  }   
  // Establecer el atributo selected de la opción
  optionTipo_mant.selected = true;

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