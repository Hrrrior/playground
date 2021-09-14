import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'AnimatedText',
  methods: {
    animate: function () {
      this.$refs.text.innerHTML = this.$refs.text.innerText.split('').map(function (char) { return '<span>' + char + '</span>' }).join('')
      anime.timeline({ loop: false }).add({
        targets: 'span',
        translateY: ['100px', 0],
        duration: 600,
        delay: function (element, i) {
          return i * 30
        }
      })
    }
  },
  mounted () {
    // this.animate()
    window.addEventListener('scroll', (event) => {
      console.log(this.$refs.text.scrollTop)
      this.animate()
    })
  }
}
