$(document).ready(function() {
 
  $("#main-slider,#slider-2").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination:true
  });

   var owl = $("#slider-3");

  owl.owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination:false
  });  
   // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
});