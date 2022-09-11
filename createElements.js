
import preparingGame from "./preparingGame.js";
import ReadingData from "./readingData.js"

export default class CreateElements extends ReadingData{
    constructor(){
        super();
        this.board = document.querySelector("#parameters");
        this.inputSide = document.querySelector("#input");
    }

    async createScene(){
       const inf = await this.readRandomCountry();
       
       const capital = document.createElement("p")
       capital.innerHTML = "Capital";
       capital.className = "gameObject";
       this.board.appendChild(capital);

       const capitalName = document.createElement("p")
       capitalName.innerHTML = inf.capital;
       capitalName.style.fontWeight = "bold";
       capitalName.className = "gameObject";
       this.board.appendChild(capitalName);

       const region = document.createElement("p")
       region.innerHTML = "Region";
       region.className = "gameObject";
       this.board.appendChild(region);

       const regionName = document.createElement("p")
       regionName.innerHTML = inf.region;
       regionName.style.fontWeight = "bold";
       regionName.className = "gameObject";
       this.board.appendChild(regionName);

       const pop = document.createElement("p")
       pop.innerHTML = "Population";
       pop.className = "gameObject";
       this.board.appendChild(pop);

       const popCount = document.createElement("p")
       popCount.innerHTML = inf.pop;
       popCount.className = "gameObject";
       popCount.style.fontWeight = "bold";
       this.board.appendChild(popCount);

       const input  = document.createElement("input");
       input.className = "gameObject";
       this.board.appendChild(input);

       const buttonNext = document.createElement("button");
       buttonNext.className = "gameObject";
       buttonNext.innerHTML = "Next";
       buttonNext.id = "next";
       this.inputSide.appendChild(buttonNext);

       const buttonCheck = document.createElement("button");
       buttonCheck.className = "gameObject";
       buttonCheck.innerHTML = "Check";
       buttonCheck.id = "check";
       this.inputSide.appendChild(buttonCheck);

       return inf.country;
    }

    async winScene (){
     

      const caption = document.createElement("h1");
      const button = document.createElement("button");
        
      caption.innerHTML = "Congrats!!!";
      caption.id = "endCaption";
      caption.className = "gameObject";
      button.innerHTML = "Next";
      button.className = "gameObject";
      button.id = "next";
        
      this.board.appendChild(caption);
      this.inputSide.appendChild(button);
    }

    tryAgain(){ 
    const check = document.querySelector("#try-again");
  
    if(check == null){
        const tryAgainCaption = document.createElement("h2");
        tryAgainCaption.className = "gameObject";
        tryAgainCaption.innerHTML = "Try Again";
        tryAgainCaption.id = "try-again";
        this.board.appendChild(tryAgainCaption); 

        this.glowEffect(tryAgainCaption);
    }
    else if(check != null){
        this.glowEffect(check);
      }
    }

    glowEffect = (item) =>{
      item.classList.add("anim");

      setTimeout(function(){
        item.classList.remove("anim");
      },1000)
    }

    
}