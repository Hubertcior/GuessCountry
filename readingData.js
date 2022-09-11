export default class ReadingData {
    constructor() {

    }

    async readRandomCountry(){
        
       let info = {
        capital: "",
        country: "",
        region: "",
        pop: "",
       }

        await fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => {
                const RandomCountry = Math.floor(Math.random() * res.length+1)
           
                info.capital = res[RandomCountry].capital[0];
                info.country = res[RandomCountry].name.common;
                info.region = res[RandomCountry].region;
                info.pop =  res[RandomCountry].population;
            })
            .catch(err => { console.log(err) });

        return info;
    }
    
}
