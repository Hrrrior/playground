// const weather = require('openweather-apis')
// weather.setLang('en')
// weather.setCityId(588409)
// weather.setUnits('metric')

// // import { get } from 'core-js/core/dict'

// weather.setAPPID('febc2da9d07dbf069697ad412cd7ea92')
export default {
  name: 'Weather',
  data () {
    return { city: '', sys: '', temperature: '', weather: '', wind: '' }
  },
  methods: {
    getWeather: function () {
      fetch('https://api.openweathermap.org/data/2.5/weather?id=588409&appid=febc2da9d07dbf069697ad412cd7ea92&units=metric')
        .then(res => res.json())
        .then(data => {
          this.city = data.name
          this.temperature = data.main
          this.weather = data.weather['0']
          this.sys = data.sys
          this.wind = data.wind
          console.log(data.weather['0'])
        })
    }

  },
  created () {
    this.getWeather()
  }
}
