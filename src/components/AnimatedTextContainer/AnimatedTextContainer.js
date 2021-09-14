import anime from 'animejs/lib/anime.es.js'

export default {

  name: 'AnimatedTextContainer',
  // data () { return { box: renderer.domElement } },
  methods: {
    animate: function () {
      const clientWidth = this.$refs.container.clientWidth * 1.2
      anime({
        targets: '.animatedContainer',
        translateX: [clientWidth, 0],
        duration: 500,
        easing: 'easeInQuad'
      }

      )
    }
  },

  mounted () {
    // this.animate()
    window.addEventListener('scroll', (event) => {
      // console.log(this.$refs.text.scrollTop)
      this.animate()
    }

    )
  }
}
