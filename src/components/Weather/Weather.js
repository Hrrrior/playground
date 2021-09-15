const api = process.env.VUE_APP_WEATHER_API
export default {
  name: 'Weather',
  data () {
    return { city: '', sys: '', temperature: '', weather: '', wind: '' }
  },
  methods: {
    getWeather: function () {
      // fetch('http://localhost:9000')
      fetch(`https://api.openweathermap.org/data/2.5/weather?id=588409&appid=${api}&units=metric`)
        .then(res => res.json())
        .then(data => {
          this.city = data.name
          this.temperature = data.main
          this.weather = data.weather['0']
          this.sys = data.sys
          this.wind = data.wind
        })
    }
  },
  created () {
    this.getWeather()
  }
}
