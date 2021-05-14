class Welcome {
    constructor() {
      //create button
      this.robberButton=createButton("robber")
        this.policeButton=createButton("police")
    }
  
    hideElements() {
      this.robberButton.hide();
      this.policeButton.hide();
    }
  
    handleOnpress() {
      this.robberButton.mousePressed(() => {
       this.choose=createButton("choose your player:")
       this.choose.position(800,150)
       this.choose.mousePressed(()=>{
         this.player1=createButton("tokyo")
         this.player1.position(800,200)
         this.player2=createButton("berlin")
         this.player2.position(800,250)
         this.player3=createButton("rio")
         this.player3.position(800,300)
         this.player4=createButton("nairobi")
         this.player4.position(800,350)
         this.player5=createButton("denver")
         this.player5.position(800,400)
         this.player6=createButton("moscow")
         this.player6.position(800,450)

         this.player1.mousePressed(()=>{
         this.robberButton.hide()
         this.policeButton.hide()
         this.choose.hide()
         this.player1.hide()
         this.player2.hide()
         this.player3.hide()
         this.player4.hide()
         this.player5.hide()
         this.player6.hide()
         playerCount+=1
         player.index=playerCount
         player.updateCount(playerCount)
         greeting.visible=true
         })

         this.player2.mousePressed(()=>{
          this.robberButton.hide()
          this.policeButton.hide()
          this.choose.hide()
          this.player1.hide()
          this.player2.hide()
          this.player3.hide()
          this.player4.hide()
          this.player5.hide()
          this.player6.hide()
          playerCount+=1
          player.index=playerCount
          player.updateCount(playerCount)
          greeting.visible=true
          }) 

          this.player3.mousePressed(()=>{
            this.robberButton.hide()
            this.policeButton.hide()
            this.choose.hide()
            this.player1.hide()
            this.player2.hide()
            this.player3.hide()
            this.player4.hide()
            this.player5.hide()
            this.player6.hide()
            playerCount+=1
            player.index=playerCount
            player.updateCount(playerCount)
            greeting.visible=true
            })

            this.player4.mousePressed(()=>{
              this.robberButton.hide()
              this.policeButton.hide()
              this.choose.hide()
              this.player1.hide()
              this.player2.hide()
              this.player3.hide()
              this.player4.hide()
              this.player5.hide()
              this.player6.hide()
              playerCount+=1
              player.index=playerCount
              player.updateCount(playerCount)
              greeting.visible=true
              })

              this.player5.mousePressed(()=>{
                this.robberButton.hide()
                this.policeButton.hide()
                this.choose.hide()
                this.player1.hide()
                this.player2.hide()
                this.player3.hide()
                this.player4.hide()
                this.player5.hide()
                this.player6.hide()
                playerCount+=1
                player.index=playerCount
                player.updateCount(playerCount)
                greeting.visible=true
                })

                this.player6.mousePressed(()=>{
                  this.robberButton.hide()
                  this.policeButton.hide()
                  this.choose.hide()
                  this.player1.hide()
                  this.player2.hide()
                  this.player3.hide()
                  this.player4.hide()
                  this.player5.hide()
                  this.player6.hide()
                  playerCount+=1
                  player.index=playerCount
                  player.updateCount(playerCount)
                  greeting.visible=true
                  })
       })
      });
  
      this.policeButton.mousePressed(() => {
        
      });
    }
  
    display() {
      this.handleOnpress();
      //give position
        this.robberButton.position(800,50)
        this.policeButton.position(150,50)
    }
  }
