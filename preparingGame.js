import CreateElements from "./createElements.js";
import mainGame from "./mainGame.js";

export default class preparingGame extends CreateElements{
    constructor(startButton){
        super();
        this.button = startButton;
        this.game = new mainGame();

        this.country;

        this.input;
        this.checkButton;
        this.nextButton;

        startButton.addEventListener("click", this.startGame, false);
    }

    startGame = async () =>{
        this.deleteItems();
        this.deleteButton();
        this.country = await this.createScene();
        this.input = document.querySelector('input');
        this.checkButton = document.querySelector('#check');
        this.nextButton = document.querySelector('#next');

        this.nextButton.addEventListener("click", this.restart, false);

        this.checkButton.addEventListener("click", ()=>{
            if(this.game.checkingValue(this.country, this.input) == true){
                this.deleteItems();
                this.winScene();
                this.nextGame();
                
            }
            else if(this.game.checkingValue(this.country, this.input) == false){
                this.tryAgain();
            }
        });
        
    }

    deleteButton(){
        this.button.remove();
    }
    
    restart = () =>{
        this.startGame();
        this.deleteItems();
    }

    deleteItems = () =>{
        const items = document.querySelectorAll('.gameObject');

        items.forEach(item =>{
            item.remove();
        })
    }

    nextGame = () =>{
        this.nextButton = document.querySelector('#next');
        
        this.nextButton.addEventListener('click', this.startGame);
    }
}