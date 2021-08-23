class Player
{
    constructor()
    {
      this.name=''
      this.distance=0
      this.place=0  
    }

    getcount()
    {
      database.ref('playerCount').on("value",function(data){count=data.val()})  
    }

    updatecount()
    {
     database.ref('/').update({playerCount:count})   

    }
    
    getPlayerInfo()
    {

    }

    update()
    {
       
    }

}