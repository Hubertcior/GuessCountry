export default class mainGame{
    constructor(){
        
    }

    checkingValue = (country, input) =>{
        if(country == input.value){
           return true;
        }
        else{
            return false;
        }
    }
}