'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 32;
  };

  currentTemperature(){
    return this.temperature;
  };

  up(){
    if (this._isMaximumTemperature()){
      return 25;
    }
    return (this.temperature += 1);
  };

  down(){
    if (this._isMinimumTemperature()){
      return 10;
    }
    return this.temperature -= 1;
  };

  powerSavingModeOn(){
    this.MAXIMUM_TEMPERATURE = 25
  };

  powerSavingModeOff(){
    this.MAXIMUM_TEMPERATURE = 32
  };

  _isMinimumTemperature(){
    return (this.currentTemperature() === this.MINIMUM_TEMPERATURE)
  };

  _isMaximumTemperature(){
    return (this.currentTemperature() === this.MAXIMUM_TEMPERATURE)
  };
};
