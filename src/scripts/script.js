const navigation = document.querySelector('.navigation');
const navigationItemFirst = document.querySelector('.navigation-burger__item--first');
const navigationItemSecond = document.querySelector('.navigation-burger__item--second');
const navigationItemThird = document.querySelector('.navigation-burger__item--third');
const navigationItems = document.querySelectorAll('.navigation-burger__item');
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationDropDown = document.querySelector('.navigation__dropdown');
const dropDownList = document.querySelector('.dropdown__list-hide');
const elementFixedBottom = document.querySelector('.fixed-bottom')
const translateBurger = ()=>{
    navigation.classList.toggle('fade');
    navigation.classList.remove('hide');
    navigationItemSecond.classList.toggle('display-none');
    navigationItemFirst.classList.toggle('translateAdd');
    navigationItemThird.classList.toggle('translateMinus');
    navigationItems.forEach((item)=>{
        item.classList.toggle('dark-background');
    })
 

}

const navigationBurger = document.querySelector('.navigation-burger').addEventListener('click',translateBurger);
navigationLinks.forEach((item)=>{
    item.addEventListener('click',function(){
        navigation.classList.add('hide');
        navigation.classList.toggle('fade');
        navigationItemSecond.classList.toggle('display-none');
        navigationItemFirst.classList.toggle('translateAdd');
        navigationItemThird.classList.toggle('translateMinus');
        navigationItems.forEach((item)=>{
            item.classList.toggle('dark-background');
        })
        console.log('kij')
    })
})
window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    if(scrollY > 200){
        navigationItems.forEach((item)=>{
            item.classList.add('dark-item');
        })
        elementFixedBottom.classList.add('visible')

    }else{
        navigationItems.forEach((item)=>{
            item.classList.remove('dark-item');
        })
        elementFixedBottom.classList.remove('visible')
    }
})
let windowWidth = window.innerWidth;
if(windowWidth > 600){
    TweenMax.staggerFrom('.navigation-animation',.2,{
        y:-2,
        scale: 0.8,
        opacity:.3,
        delay: .2,
        ease: Power1.easeIn

    },.4)
}
TweenMax.from('.h1',2,{
    x:10,
    opacity: 0,
})
TweenMax.from('.button-animated',2,{
    y: 40,
    opacity: 0,
    delay:2
})

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



let dd = document.addEventListener()

// api google map function
 


 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
