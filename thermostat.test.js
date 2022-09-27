const Thermostat = require('./thermostat');

describe('thermostat', () => {
    it('increases thermostat by 1 degree', () => {
        const thermo = new Thermostat();
        const result = thermo.up();
        expect(result).toBe(21);
    });

    it('decreases thermostat by 1 degree', () => {
        const thermo = new Thermostat();
        const result = thermo.down();
        expect(result).toBe(19);
    });
    it('decreases thermostat by 11 degree', () => {
        const thermo = new Thermostat();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        thermo.down();
        let result = thermo.down();
        expect(result).toEqual("Temperature can not be lower than 10");
    });

    it('turns off the power saving mode', () => {
        const thermo = new Thermostat();
        const result = thermo.setPowerSavingMode(false);
        expect(result).toEqual("PSM is now off, max temperature is no more 25");
    });
    it('turns on the power saving mode', () => {
        const thermo = new Thermostat();
        const result = thermo.setPowerSavingMode(true);
        expect(result).toEqual("PSM is now on, max temperature is 25");
    });

    it('turns on the power saving mode and reaches maximum temperature', () => {
        const thermo = new Thermostat();
        thermo.up();
        thermo.up();
        thermo.up();
        thermo.up();
        thermo.up();
        const result = thermo.up();
        expect(result).toEqual("Reached maximum temperature");
    });

    it('reset temperature to 20', ()=> {
        const thermo = new Thermostat();
        thermo.reset();
        const result = thermo.getTemperature();
        expect(result).toBe(20);
    });

    it ('returns the temperature', () => {
        const thermo = new Thermostat();
        const result = thermo.getTemperature();
        expect(result).toBe(20);
    });

});