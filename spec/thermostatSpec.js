'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('default temperature is 20 degrees', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });
});
