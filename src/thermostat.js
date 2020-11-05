'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
  };

  currentTemperature(){
    return this.temperature;
  };

  up(){
    return (this.temperature += 1);
  };

  down(){
    if (this.currentTemperature() === this.MINIMUM_TEMPERATURE){
      return 10;
    }
    return this.temperature -= 1;
    };
};
