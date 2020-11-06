'use strict';

class Thermostat {
  constructor(){
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
    this.LOW_USAGE_THRESHOLD = 18;
    this.HIGH_USAGE_THRESHOLD = 25;
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

  energyUsage(){
    if (this.currentTemperature() < this.LOW_USAGE_THRESHOLD){
      return "low usage";
    }else if ((this.LOW_USAGE_THRESHOLD <= this.currentTemperature()) && ( this.currentTemperature() <=  this.HIGH_USAGE_THRESHOLD)) {
      return "medium usage";
    }else {
      return "high usage";
    }
  };
};
