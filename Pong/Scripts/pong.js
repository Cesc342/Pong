//Variables principals
var vcpu = localStorage.getItem("velocitatCPU");
var tfcpu = localStorage.getItem("CPU");
var nivell = localStorage.getItem("nivell");
var canvas = null;
var context = null;
var can2 = document.getElementById("can2");
var c2 = can2.getContext("2d");
var pilota;
var j;
var i = 10;
var punts = 0;
var gameOver = false;
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//Numero Random
function r(x){
  return Math.floor(Math.random() * x);
}

//Pilota que rebota
function pilota(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.context = canvas.getContext("2d");

    this.draw = function (){
        this.context.beginPath();
        this.context.arc(this.x,this.y,10,0,Math.PI*2,false);
        this.context.fillStyle = "black";
        this.context.stroke();
    }
    this.act = function (width){
    if(this.x < 0 || this.x >width -10){
      this.dx = -this.dx;
    }

    if(this.y < 0 || this.y > 400 -10){
      this.dy = -this.dy;
    }
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    }
}

//Jugador 1
function j(x,y,dy){
  this.y = y;
  this.x = x;
  this.dy = dy;
  this.punts = 0;
  this.context = canvas.getContext("2d");

  this.draw = function(){
    this.context.fillRect(this.x,this.y,25,100);
  }
}

//Event Listener j1
function lis(e) {
  context.clearRect(0,0,400,800);
  if (j1.y > 0 && j1.y < 400) {
    if (e.key =="a") {
      j1.y = j1.y - j1.dy;
    }
    if (e.key =="s"){
      j1.y = j1.y + j1.dy;
    }
    if(j1.y >= 400-100){
      j1.y = j1.y - 5;
    }else if(j1.y<=0){
      j1.y = j1.y + 5;
    }
    j1.draw();
  }
}

//Event Listener Escape
function surtir(e){
  if(e.key == "Enter"){
    window.close();
  }
}

//Comandos
c2.fillText("A =",25,23,40);
c2.fillText("S =",25,48,40)
fletxaAmunt = new Image(10,10);
fletxaAball = new Image(10,10);
fletxaAmunt.src = "Fotos/Fletxa_Amunt.png";
fletxaAball.src = "Fotos/Fletxa_Aball.png";
fletxaAball.onload = function(){
  c2.drawImage(fletxaAball,50,35,20,20);
}
fletxaAmunt.onload = function(){
  c2.drawImage(fletxaAmunt,50,10,20,20);
}

//Objectes i Variables
h1 = document.getElementById("h1");
h1.innerHTML = punts + "p";
j1 = new j(0,150,5);
if(nivell == "facil"){
  pil = new pilota(395,r(300)+50,2,2);
}else if(nivell == "normal"){
  pil = new pilota(395,r(300)+50,3,3);
}else if(nivell == "dificil"){
  pil = new pilota(395,r(300)+50,4,4);
}else if(nivell == "expert"){
  pil = new pilota(395,r(300)+50,5,5);
}

//Events Listeners
window.addEventListener("keypress",lis);
window.addEventListener("keypress",surtir);

function animació(){
  if(gameOver){
    pil.context.clearRect(0,0,1100,1100);
    alert("GAME OVER");
   }else{
  pil.context.clearRect(0,0,1000,1000);
  if (pil.x <= 31) {
    if(j1.y <= pil.y + 10 && j1.y + 105 >= pil.y + 5){
      pil.dx = -pil.dx;
      pil.dx += 0.2;
      pil.dy += 0.2;
      punts += i;
      i += 10;
      h1.innerHTML = punts + "p";
    }else{
      var rec;
      if(nivell == "facil"){
        rec = window.localStorage.getItem("recordf");
      }else if(nivell == "normal"){
        rec = window.localStorage.getItem("recordn");
      }else if(nivell == "dificil"){
        rec = window.localStorage.getItem("recordd");
      }else if(nivell == "expert"){
        rec = window.localStorage.getItem("recorde");
      }
      if(rec == null){
        rec = 0;
      }
      if(rec < punts){
        if(nivell == "facil"){
          window.localStorage.setItem("recordf", punts);
        }else if(nivell == "normal"){
          window.localStorage.setItem("recordn", punts);
        }else if(nivell == "dificil"){
          window.localStorage.setItem("recordd", punts);
        }else if(nivell == "expert"){
          window.localStorage.setItem("recorde", punts);
        }
      }
      w = window.open("","","WIDTH=200, HEIGHT= 200");
      w.console.log(rec + "rec, "+ punts + "p");
      recor = w.document.createElement("b");
      recor.style.color = "rgb(50,50,50)";
      lloc = w.document.createElement("h1");
      nose = w.document.createElement("h2");
      tit = w.document.createElement("title");
      recor.innerHTML = " Record: " + rec + "p";
      tit.innerHTML = "GAME OVER";
      lloc.style.color = "red";
      lloc.style.textAlign = "center";
      nose.style.textAlign = "center";
      nose.innerHTML = punts + "p";
      lloc.innerHTML = "GAME OVER";
      w.document.body.style.border = "5px solid black";
      w.document.body.appendChild(lloc);
      w.document.body.appendChild(nose);
      w.document.body.appendChild(recor);
      w.document.head.appendChild(tit);
      close();
    }
  }
  pil.draw();
  pil.act(canvas.width);
  j1.draw();
  }
}
setInterval(animació,10);
