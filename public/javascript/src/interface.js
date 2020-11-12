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


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});