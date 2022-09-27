class Thermostat{
    constructor(){
        this.temperature = 20;
        this.mode = true;
    }
    
    up(){
        if(this.mode === true && this.temperature < 25){
           this.temperature += 1;
        }else if(this.mode === false && this.temperature < 32){
            this.temperature += 1;
        }else{
            return "Reached maximum temperature";
        }
        
    }

    down(){
        if(this.temperature <= 10){
            return "Temperature can not be lower than 10";
        }else{
            this.temperature -= 1;
        }
    }

    setPowerSavingMode(mode){
        this.mode = mode;
        if (mode === true){
            return "PSM is now on, max temperature is 25";
        }else{
            return "PSM is now off, max temperature is no more 25";
        }
    }

    getTemperature(){
        return this.temperature;
    }

    reset(){
        this.temperature = 20;
    }

}

module.exports = Thermostat;