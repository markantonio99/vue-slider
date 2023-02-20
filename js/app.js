const app = Vue.createApp({
  data() {
    return {
      images: [
        './immagini/imm2.png',
        './immagini/imm3.png',
        './immagini/imm4.png',
        './immagini/imm5.png',
        './immagini/imm6.png',
      ],
      currentIndex: 0
    }
  },
  computed: {
    inserisciImmagine() {
      return this.images[this.currentIndex]
    },
    disableNonePrev() {
      return this.currentIndex === 0
    },
    disableNoneNext() {
      return this.currentIndex === this.images.length - 1
    }
  },
  methods: {
    btnNext() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
      }
    },
    btnPrev() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    }
  }
});

app.mount('#app');
