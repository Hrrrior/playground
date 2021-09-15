const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
app.use(cors())
app.get('/', (req, res) => {
  const api = process.env.VUE_APP_WEATHER_API
  axios.get(`https://api.openweathermap.org/data/2.5/weather?id=588409&appid=${api}&units=metric`)
    .then(response => {
    //   console.log(response)
      res.json(response.data)
    }).catch(function (error) {
      res.send(console.log(error))
    })
})

app.listen(process.env.port || 9000)
console.log('Web Server is listening at port ' + (process.env.port || 9000))
