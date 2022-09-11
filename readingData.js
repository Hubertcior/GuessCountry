export default class ReadingData {
    constructor() {

    }

    async readRandomCountry(){
        
       let info = {
        capital: "",
        country: "",
        region: "",
        pop: "",
        img: "",
       }

        await fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => {
                const RandomCountry = Math.floor(Math.random() * res.length)
    
                info.capital = res[RandomCountry].capital[0];
                info.country = res[RandomCountry].name.common;
                info.region = res[RandomCountry].region;
                info.pop =  res[RandomCountry].population;
                info.img = res[RandomCountry].flags.png;
            })
            .catch(err => { console.log(err) });
            
            console.log(info);
        return info;
    }
    
}
