var player
var gin,gtp
var gti
var F=0

function preload(){ // função que carregar todas as imagens e animações
  
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(255,255);
  player = createSprite(19,114,16,16);
  gin = new Group();
  gtp=new Group();
  gti=new Group();
  for(var a=0; a<4; a++){
    for(var b=0; b<9; b++){
      var iobj=createSprite(160+(a*25),36+(b*25),16,16);
      gin.add(iobj);
    }
  }
}

function draw(){
  background("black");
  drawSprites(); 
  fcpos();
  gtp.isTouching(gin,di);
  inc();
}
function gm(){
  if(gin.length===0){
    F=F+1;
    if(keyDown("q")||keyDown("alt")||keyDown("0")){
      
    }
  }
}

function di(b,i){
b.destroy();
i.destroy();
}


function fcpos() {
  if(keyDown("up")||keyDown("w")||keyDown("8")){
    player.y-=1;
    }
  if(keyDown("down")||keyDown("s")||keyDown("2")){
      player.y+=1;
    }
    if(keyDown("left")||keyDown("a")||keyDown("4")){
      player.x-=1;
      }
    if(keyDown("right")||keyDown("d")||keyDown("6")){
      player.x+=1;
     }
     if(keyDown("alt")||keyDown("q")||keyDown("0")){
      var st
      st=createSprite(player.x,player.y,8,2);
      st.velocity.x=9;
      gtp.add(st);
	  if (st.x>240){
	  st.destroy();
	  }
     }
}
