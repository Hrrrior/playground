export default {
  name: 'DigitalClock',
  data () {
    return { hours: '00', minutes: '00', seconds: '00', day: '00', month: '00', year: '00' }
  },
  methods: {
    getTime: function () {
      const timeNow = new Date()
      this.hours = timeNow.getHours() < 10 ? ('0' + timeNow.getHours()) : timeNow.getHours()
      this.minutes = timeNow.getMinutes() < 10 ? ('0' + timeNow.getMinutes()) : timeNow.getMinutes()
      this.seconds = timeNow.getSeconds() < 10 ? ('0' + timeNow.getSeconds()) : timeNow.getSeconds()
    },
    getDate: function () {
      const timeNow = new Date()
      this.day = timeNow.getDate() < 10 ? ('0' + timeNow.getDate()) : timeNow.getDate()
      this.month = (parseInt((timeNow.getMonth()) + 1)) < 10 ? ('0' + (parseInt(timeNow.getMonth()) + 1)) : (parseInt(timeNow.getMonth()) + 1)
      this.year = timeNow.getFullYear() < 10 ? ('0' + timeNow.getFullYear()) : timeNow.getFullYear()
    }
  },
  created () {
    setInterval(() => { this.getTime() }, 1000)
    this.getDate()
  }
}
