'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
  };

  currentTemperature(){
    return this.temperature;
  };

  up(){
    if (this.currentTemperature() === this.MAXIMUM_TEMPERATURE){
      return 25;
    }
    return (this.temperature += 1);
  };

  down(){
    if (this.currentTemperature() === this.MINIMUM_TEMPERATURE){
      return 10;
    }
    return this.temperature -= 1;
    };
};
