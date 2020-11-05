'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increase temperature with up function', function(){
    expect(thermostat.up()).toEqual(21);
  });

  it('decreases temperature with down function', function(){
    expect(thermostat.down()).toEqual(19);
  });

  it('temperature does not decrease below 10', function(){
    for(let i = 1; i <= 15; i++){
      thermostat.down()
    };
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('temperature does not go above 25 when power saving mode is on', function() {
    thermostat.powerSavingModeOn()
    for(let i = 1; i <= 15; i++){
      thermostat.up()
    };
    expect(thermostat.currentTemperature()).toEqual(25);
  });

  it('temperature does not go above 32 when power saving mode is off', function() {
    thermostat.powerSavingModeOn()
    thermostat.powerSavingModeOff()
    for(let i = 1; i <= 15; i++){
      thermostat.up()
    };
    expect(thermostat.currentTemperature()).toEqual(32);
  });

});
