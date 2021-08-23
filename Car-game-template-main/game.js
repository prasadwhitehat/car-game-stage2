class Game
{
    constructor()
    {

    }
     async getstate()
    {
        await database.ref('gameState').on("value",function(data){state=data.val()})   
        
    }
    
    updateState()
    {
        database.ref('/').update({gameState:state})   
    }
    
    start()
    {
       player.getcount()
       form.display() 
    }

    play()
    {
      form.hide();
      text("GameStarted",500,250)
    }

    end()
    {

    }
}