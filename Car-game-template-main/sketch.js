var database;
var form,game,player;
var gameState,playerCount;
var count,state;

function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game= new Game();
  player=new Player();
  form=new Form();
  game.getstate();
  game.start();

 

}

function draw()
{
  background("white");
  game.getstate();
  player.getcount();
  if(count===2)
  {
    state=1
    game.updateState();

  }
  
  if(gameState===1)
   {
      game.play();

   } 
 
  
   
  
}

