var miVar=null;

var citas = [];

var mt = ["Mateo ", 25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20];

var mc = ["Marcos ", 45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20];

var lc = ["Lucas ", 80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53];

var jn = ["Juan ", 51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25];

function GeneraCitas() {
  for (var i=1; i<mt.length; i++) {
    for (var j=1; j<=mt[i]; j++) {
      citas.push(mt[0]+i+","+j);
    }
  };
  for (var i=1; i<mc.length; i++) {
    for (var j=1; j<=mc[i]; j++) {
      citas.push(mc[0]+i+","+j);
    }
  };
  for (var i=1; i<lc.length; i++) {
    for (var j=1; j<=lc[i]; j++) {
      citas.push(lc[0]+i+","+j);
    }
  };
  for (var i=1; i<jn.length; i++) {
    for (var j=1; j<=jn[i]; j++) {
      citas.push(jn[0]+i+","+j);
    }
  };
};

function GeneraNumeros() {
  var pdfs = document.getElementById("pdfs");
  pdfs.style.display = "none";
  if (!miVar) {
    miVar = setInterval(NuevoNumero, 40);
  }  
};

function NuevoNumero() {
  var n = Math.floor(Math.random() * citas.length);
  document.getElementById("evangelio").innerHTML = citas[n];
};

function Parada() {
  clearInterval(miVar);
  miVar=null;
  var pdfs = document.getElementById("pdfs");
  var cita = document.getElementById("evangelio").innerHTML;
  if (cita.startsWith("Marcos")) {
    VerMarcos();
  } else if (cita.startsWith("Lucas")) {
    VerLucas();
  } else if (cita.startsWith("Juan")) {
    VerJuan();
  } else {
    VerMateo();
  };
  pdfs.style.display = "block";
};

function VerMateo() {
  var visorpdfs = document.getElementsByTagName("iframe");
  //visorpdfs[0].setAttribute("src", "https://docs.google.com/viewerng/viewer?url=https://salvadorestran.github.io/evangelio/Mateo.pdf&embedded=true");
  visorpdfs[0].setAttribute("src", "mateo.html");
};

function VerMarcos() {
  var visorpdfs = document.getElementsByTagName("iframe");
  //visorpdfs[0].setAttribute("src", "https://docs.google.com/viewerng/viewer?url=https://salvadorestran.github.io/evangelio/Marcos.pdf&embedded=true");
  visorpdfs[0].setAttribute("src", "marcos.html");
};

function VerLucas() {
  var visorpdfs = document.getElementsByTagName("iframe");
  //visorpdfs[0].setAttribute("src", "https://docs.google.com/viewerng/viewer?url=https://salvadorestran.github.io/evangelio/Lucas.pdf&embedded=true");
  visorpdfs[0].setAttribute("src", "lucas.html");
};

function VerJuan() {
  var visorpdfs = document.getElementsByTagName("iframe");
  //visorpdfs[0].setAttribute("src", "https://docs.google.com/viewerng/viewer?url=https://salvadorestran.github.io/evangelio/Juan.pdf&embedded=true");
  visorpdfs[0].setAttribute("src", "juan.html");
};

window.addEventListener("load", GeneraCitas, false);
