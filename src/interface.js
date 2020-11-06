$(document).ready(function() {
  var thermostat = new Thermostat();
  
  $('#temperature').text(thermostat.temperature);

  $("#tempUp").click(function() {
      thermostat.up();
      updateTemperature();
  });

  $("#tempDown").click(function() {
    thermostat.down();
    updateTemperature();
  });

  $("#psmOn").click(function() {
    thermostat.powerSavingModeOn();
    $('#psmon').text('PSM turned on');
    updateTemperature();
  });

  $("#psmOff").click(function() {
    thermostat.powerSavingModeOff();
    $('#psmoff').text('PSM turned off');
    updateTemperature();
  });

  $("#reset").click(function() {
    alert("Temp reset to 20 degrees");
    thermostat.reset();
    updateTemperature();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
  };
});