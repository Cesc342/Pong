canvas = document.getElementById("canvas");
c = canvas.getContext("2d");


//Buttons
buto1 = new Image(100,100);
buto1.src = "Fotos/buto_1.png";
buto1.onload = function (){
  c.drawImage(buto1,30,10,100,100);
}

buto2 = new Image(100,100);
buto2.src = "Fotos/buto_1.png";
buto2.onload = function (){
  c.drawImage(buto1,30,110,100,100);
}

buto3 = new Image(100,100);
buto3.src = "Fotos/buto_1.png";
buto3.onload = function (){
  c.drawImage(buto3,30,210,100,100);
}

buto4 = new Image(100,100);
buto4.src = "Fotos/buto_1.png";
buto4.onload = function (){
  c.drawImage(buto4,30,310,100,100);
}


//Labels
expert = new Image(100,100);
expert.src = "Fotos/Expert.png";
expert.onload = function () {
  c.drawImage(expert,130,340,75,50);
}

fàcil = new Image(100,100);
fàcil.src = "Fotos/Fàcil.png";
fàcil.onload = function () {
  c.drawImage(fàcil,130,35,70,40);
}

normal = new Image(100,100);
normal.src = "Fotos/Normal.png";
normal.onload = function () {
  c.drawImage(normal,130,140,70,40);
}

dificil = new Image(100,100);
dificil.src = "Fotos/Difícil.png";
dificil.onload = function () {
  c.drawImage(dificil,130,240,70,40);
}

//Event
function evento(e){
  cpu = document.getElementById("cpu");
  x = e.layerX;
  y = e.layerY;
  if(x > 50 && x < 110 && y > 30 && y < 90){
    localStorage.setItem("velocitatCPU",3);
    localStorage.setItem("nivell","facil");
    if(cpu.value == "Si"){
    window.open("PongCPU.html");
    }else{
    window.open("Pong.html");
    }
  }else if(x > 50 && x < 110 && y > 130 && y < 190){
    localStorage.setItem("velocitatCPU",4);
    localStorage.setItem("nivell","normal");
    if(cpu.value == "Si"){
    window.open("PongCPU.html");
    }else{
    window.open("Pong.html");
    }
  }else if(x > 50 && x < 110 && y > 230 && y < 290){
    localStorage.setItem("velocitatCPU",5);
    localStorage.setItem("nivell","dificil");
    if(cpu.value == "Si"){
    window.open("PongCPU.html");
    }else{
    window.open("Pong.html");
    }
  }else if(x > 50 && x < 110 && y > 330 && y < 390){
    localStorage.setItem("velocitatCPU",7);
    localStorage.setItem("nivell","extrem");
    if(cpu.value == "Si"){
    window.open("PongCPU.html");
    }else{
    window.open("Pong.html");
    }
  }
}

canvas.addEventListener("click",evento);
