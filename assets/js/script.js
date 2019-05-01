<<<<<<< HEAD
$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});

$(function(){
 var texto = "Ingeniería Civil Industrial Universidad de Chile - Desarrollador Web";
 maquina("typer",texto,100,0);
});

function maquina(contenedor,texto,intervalo,n){
 var i=0,
  // Creamos el timer
  timer = setInterval(function() {
  if ( i<texto.length ) {
   // Si NO hemos llegado al final del texto..
   // Vamos añadiendo letra por letra y la _ al final.
   $("#"+contenedor).html(texto.substr(0,i++) + "_");
  } else {
   // En caso contrario..
   // Salimos del Timer y quitamos la barra baja (_)
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   // Auto invocamos la rutina n veces (0 para infinito)
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },3000);
   }
  }
 },intervalo);
};
=======
$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});

$(function(){
 var texto = "Ingeniería Civil Industrial Universidad de Chile - Desarrollador Web";
 maquina("typer",texto,100,0);
});

function maquina(contenedor,texto,intervalo,n){
 var i=0,
  // Creamos el timer
  timer = setInterval(function() {
  if ( i<texto.length ) {
   // Si NO hemos llegado al final del texto..
   // Vamos añadiendo letra por letra y la _ al final.
   $("#"+contenedor).html(texto.substr(0,i++) + "_");
  } else {
   // En caso contrario..
   // Salimos del Timer y quitamos la barra baja (_)
   clearInterval(timer);
   $("#"+contenedor).html(texto);
   // Auto invocamos la rutina n veces (0 para infinito)
   if ( --n!=0 ) {
    setTimeout(function() {
     maquina(contenedor,texto,intervalo,n);
    },3000);
   }
  }
 },intervalo);
};
>>>>>>> d68e33d1e61dd82c0d9b6301211690f9592f124a
