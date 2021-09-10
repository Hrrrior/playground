export default {
  name: 'DigitalClock',
  data () {
    return { hours: '00', minutes: '00', seconds: '00' }
  },
  methods: {
    getTime: function () {
      const timeNow = new Date()
      this.hours = timeNow.getHours() < 10 ? ('0' + timeNow.getHours()) : timeNow.getHours()
      this.minutes = timeNow.getMinutes() < 10 ? ('0' + timeNow.getMinutes()) : timeNow.getMinutes()
      this.seconds = timeNow.getSeconds() < 10 ? ('0' + timeNow.getSeconds()) : timeNow.getSeconds()
    }
  },
  created () {
    setInterval(() => { this.getTime() }, 1000)
  }
}
