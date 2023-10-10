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
          document.getElementById("sede").value = response.sede;
          document.getElementById("departamento").value = response.departamento;
          
          
        }
      }
    };
    xhr.send("input=" + input);
  });