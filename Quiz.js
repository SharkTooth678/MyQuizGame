class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    form.hide(); 
    textSize(30);
    text("Results of Quiz", 120, 100);
    Quiz.getContestantInfo();

    if(allContestants !== undefined){
      fill("Blue")
      textSize(20);
      text("NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");  
    }
    
  }

}
