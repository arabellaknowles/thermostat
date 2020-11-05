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
    if (this._isMaximumTemperature()){
      return;
    }
    return (this.temperature += 1);
  };

  down(){
    if (this._isMinimumTemperature()){
      return;
    }
    return this.temperature -= 1;
  };

  powerSavingModeOn(){
    return this.MAXIMUM_TEMPERATURE = 25
  };

  powerSavingModeOff(){
    return this.MAXIMUM_TEMPERATURE = 32
  };

  reset(){
    return this.temperature = 20
  };

  _isMinimumTemperature(){
    return (this.currentTemperature() === this.MINIMUM_TEMPERATURE)
  };

  _isMaximumTemperature(){
    return (this.currentTemperature() === this.MAXIMUM_TEMPERATURE)
  };
};

