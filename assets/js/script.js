let app = new Vue({

  el: "#root",

  data: {
    counter: 0,
    images: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
  ],
  timer: null

  },
   mounted: function() {
    this.startSlide();
  },

  methods: {
      
     startSlide() {
      this.timer = setInterval(this.NextImage, 4000);
    },
    NextImage(){
      this.counter++;
      if(this.counter== this.images.length){
        this.counter = 0;
      }
    },

    PrevImage(){
      if(this.counter > 0){
        this.counter--;
      } else {
        this.counter = this.images.length-1;
      }
    }

  }

});