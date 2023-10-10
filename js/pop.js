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