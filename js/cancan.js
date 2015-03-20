function(){
  funtion init(){
    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext('2d');
    var wCanvas = new WebTuningCanvas(c);

  }
  window.addEventListener('load', init, false);

} ());



