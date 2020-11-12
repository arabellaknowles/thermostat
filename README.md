# Thermostat App
This is a frontend javascript web app. The user is able to increase and decrease the temperature of the thermostat. The temperature is displayed in colours relating to the energy usage: green for low, white for medium and red for high energy usage. The user is able to switch on and off power saving mode, which limits the maximum temperature.  

### Technologies 
- Jasmine is used as a testing interface for the javascript code. Unit tests can be run by opening SpecRunner:
```
$ open public/javascript/SpecRunner.html
```
- jQuery is used to create a dynamic visual interface
- A [weather API](https://openweathermap.org/api) is used for weather reports on user specified cities.
- Capybara is used for feature testing. Input this code to your terminal to run the tests:
```
$ rspec
```

### Set Up
- Clone this repository
- In your terminal run:
```
bundle install
```
- In order to use, in your terminal run:
```
$ ruby app.rb
```

