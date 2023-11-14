$('.center').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
  //   button might not work with upsell page. try to find a workaround
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


document.addEventListener('click', function (event) {
  if (event.target.matches('[name~="test"]')){

    //make array
    const upsolditems = [];
    var numupsolditems = 0;
    const checkboxes = document.querySelectorAll('input[name^="Upsell_Selected["]');

    //loop to check?
  checkboxes.forEach( checkbox =>{
    if(checkbox.checked){
      console.log("ping")
      upsolditems.push({
        itemName: checkbox.getAttribute('data-item-name')
      })
      numupsolditems = numupsolditems+1;
    }
  })

  console.log(upsolditems);
  console.log(numupsolditems);
    //push to array


    if(numupsolditems === 0 ){
    //push event no sale
console.log("event = upsale-failed")
        
    }
    else{
    //push event sale
console.log("event = upsale")

        
    }
    
}
})