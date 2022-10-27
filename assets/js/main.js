const { createApp } = Vue
createApp({
  data() {
    return {
        seasons: [
            {Image: "01.webp",
            Title: "Spiderman"
            }, 
            {Image: "02.webp",
            Title: "Ratchet And Clank"
            }, 
            {Image: "03.webp",
            Title: "Fortnite" 
            }, 
            {Image: "04.webp",
            Title: "Stray" 
            },
            {Image: "05.webp",
            Title: "Avengers" 
            }
        ],
        source: "./assets/img/",
        counter: 0,
    }
  }, 
  methods:{
    avanti(){
      this.counter++
      if(this.counter >= this.seasons.length){
        this.counter=0
      }
    },
    dietro(){
      this.counter--
      if(this.counter < 0){
        this.counter = this.seasons.length-1
      }
    },
  }

}).mount('#app')