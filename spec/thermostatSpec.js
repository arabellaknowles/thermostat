'use strict';

describe('Thermostat', function() {
  it('default temperature is 20 degrees', function() {
    thermostat = new Thermostat
    expect(thermostat.temparature()).toEqual(20);
  });
});
