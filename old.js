(function(){
    $(document).ready(init_gallery);

    var cycle_delay = 4000;
    var cycleTO;
    var isCycling = false;

    function init_gallery() {
      $('.gallery-wrapper').on('click',cycleGallery);
      cycleTO = setInterval(cycleGallery,cycle_delay);
      $('.gallery-wrapper').hover(
        function(){
          clearInterval(cycleTO);
        },
        function(){
          clearInterval(cycleTO);
          cycleTO = setInterval(cycleGallery,cycle_delay);
        }
      );
    }

    function cycleGallery() {
      if (isCycling) { return; }
      isCycling = true;
      var slides = $('.gallery-slide');
      var curr = slides.filter('.current-image');
      var next = slides.filter('.next-image');
      var next_inactive = next.next('.inactive-image');
      if (!next_inactive.length) {
        next_inactive = slides.filter('.inactive-image').first();
      }
      curr.toggleClass('current-image inactive-image');
      next.toggleClass('current-image next-image');
      next_inactive.toggleClass('next-image inactive-image');
      setTimeout(function(){isCycling = false;},1000);
    }
})();


new Vue({
    el: '#app',
    data: {
      name: 'Hello World!',
      cycle_delay: 4000,
      cycleTO: setInterval(this.cycleGallery,this.cycle_delay),
      isCycling: false,
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    },
    methods: {
      changename: function(event) {
      this.name = event.target.value;
      },
      sayHello: function() {
      return {apple:2};
      },
      initGallery: function() {
        $('.gallery-wrapper').on('click',cycleGallery);
        cycleTO = setInterval(cycleGallery,cycle_delay);
        $('.gallery-wrapper').hover(
          function(){
            clearInterval(cycleTO);
          },
          function(){
            clearInterval(cycleTO);
            cycleTO = setInterval(cycleGallery,cycle_delay);
          }
      );
      },
      cycleGallery: function() {
        if (isCycling) { return; }
        isCycling = true;
        var slides = $('.gallery-slide');
        var curr = slides.filter('.current-image');
        var next = slides.filter('.next-image');
        var next_inactive = next.next('.inactive-image');
        if (!next_inactive.length) {
            next_inactive = slides.filter('.inactive-image').first();
        }
        curr.toggleClass('current-image inactive-image');
        next.toggleClass('current-image next-image');
        next_inactive.toggleClass('next-image inactive-image');
        setTimeout(function(){isCycling = false;},1000);
      }
    }
});