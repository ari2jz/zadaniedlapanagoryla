var canvas;
var context; //zmienne

window.onload = function () {
  canvas = document.getElementById("plotCanvas"); //pole do rysowania
  context = canvas.getContext("2d");
};

function plot() {
  var a = Number(document.getElementById("inputA").value); //wsadzanie danych do zmiennych
  var b = Number(document.getElementById("inputB").value);

  document.getElementById("funEquation").innerHTML = "y=" + a + "x+" + b; // napisanie wzoru funkcjie

  context.clearRect(0, 0, canvas.width, canvas.height); //czyszczenie pola rysunku

  var x0 = 0.5 * canvas.width;
  var y0 = 0.5 * canvas.height; // ta czesc kodu oblicza połówki "planszy". kolejno szerokosc jak i wysokosc
  var x;
  var y;
  var xMax = Math.round(canvas.width - x0);
  var xMin = Math.round(-x0);
  var axes = {
    x0,
    y0,
  };

  drawAxes(context, axes);

  context.beginPath();
  // parametry linii funkcji
  context.strokeStyle = "white";
  context.lineWidth = 2;

  // rysowanie funkcji
  for (var i = xMin; i < xMax; i++) {
    x = i;
    y = a * x + b;

    if (i == xMin) {
      context.moveTo(x0 + x, y0 - y);
    } else {
      context.lineTo(x0 + x, y0 - y);
    }
  }

  context.stroke();
}

function drawAxes(context, axes) {
  var x0 = axes.x0;
  var y0 = axes.y0;
  var width = context.canvas.width;
  var height = context.canvas.height;
  var xmin = 0;
  context.beginPath();
  // ustawienie paramaterow linii
  context.strokeStyle = "red";
  context.lineWidth = 5;
  //----rysowanie osi y----
  context.moveTo(xmin, y0);
  context.lineTo(width, y0);
  //---- rysowanie osi x-----
  context.moveTo(x0, 0);
  context.lineTo(x0, height);

  //--- rysowanie strzalki x---
  context.moveTo(width, height / 2);
  context.lineTo(width - 15, height / 2 + 10);
  context.moveTo(width, height / 2);
  context.lineTo(width - 15, height / 2 - 10);
  //--- rysowanie strzaki y---
  context.moveTo(width / 2, 0);
  context.lineTo(width / 2 - 10, 15);
  context.moveTo(width / 2, 0);
  context.lineTo(width / 2 + 10, 15);

  // rysowanie 'kreseczek' na osi x
  for (var i = x0; i < width; i += 50) {
    context.moveTo(i, height / 2 - 7);
    context.lineTo(i, height / 2 + 7);
  }
  for (var i = x0; i > 0; i -= 50) {
    context.moveTo(i, height / 2 - 7);
    context.lineTo(i, height / 2 + 7);
  }

  // rysowanie 'kreseczek' na osi y
  for (var i = y0; i < height; i += 50) {
    context.moveTo(width / 2 - 7, i);
    context.lineTo(width / 2 + 7, i);
  }
  for (var i = y0; i > 0; i -= 50) {
    context.moveTo(width / 2 - 7, i);
    context.lineTo(width / 2 + 7, i);
  }
  // wywowlanie funkcji rysowania wszystkich polecen
  context.stroke();
}
