const navigation = document.querySelector('.navigation');
const navigationItemFirst = document.querySelector('.navigation-burger__item--first');
const navigationItemSecond = document.querySelector('.navigation-burger__item--second');
const navigationItemThird = document.querySelector('.navigation-burger__item--third');
const navigationItems = document.querySelectorAll('.navigation-burger__item');
const navigationLinks = document.querySelectorAll('.navigation__link');
const navigationDropDown = document.querySelector('.navigation__dropdown');
const dropDownList = document.querySelector('.dropdown__list-hide');
const elementFixedBottom = document.querySelector('.fixed-bottom');

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


 
 
 
 


 
 
 
var $wrapper = $("#wrapper"),
    $carousel = $("#carousel"),
    $nav = $("#nav"),
    $figures = $("figure"),
    figuresLength = $figures.length;

TweenMax.set("#wrapper",{
  perspective: 1000
});

TweenMax.set("#carousel",{
  //force3D:false,
  transformStyle:"preserve-3d",
  z:-288
});

TweenMax.set("#carousel > figure",{
  //force3D:false,
  //z:288
});

var rY = 0, 
    tZ = 288;

$figures.each(function(index,element){
    
    TweenMax.set(element,{
      //force3D:false,
      //parseTransform:true,
      transform: "rotateY("+rY+"deg)  translateZ(400px)"
      //rotationY:rY,
      //z:288
    });
  
    //$(element).css(transform,"rotateY("+rY+"deg) translateZ(288px)");
 
    rY = rY + 40;
    //console.log(rY);
});

$nav.on("click", "#prev", function(){
    
    TweenMax.to("#carousel",1,{
      //parseTransform:true,
      rotationY:"-=40"
      //transform: "rotateY("+rY+"deg) translateZ(-288px)"
    });
});

$nav.on("click", "#next", function(){
    TweenMax.to("#carousel",1,{
      //parseTransform:true,
      rotationY:"+=40"
      //transform: "rotateY("+rY+"deg) translateZ(-288px)"
    });
});

//TweenMax.to("#carousel",20,{
//      rotationY:"+=360",
//      repeat:-1
//});

var panelSize = 186;
var  numberOfPanels = figuresLength;

var tz = Math.round( ( panelSize / 2 ) /  Math.tan( Math.PI / numberOfPanels ) );

console.log(tz)
const plus = document.querySelectorAll('.plus-widg');
const hiddenText = document.querySelectorAll('.hidden-text');

const  showText =()=>{
  plus.forEach((item)=>{
    item.addEventListener('click',(e)=>{
     let arrHiddenText = Array.from(hiddenText)
     arrHiddenText.map((text)=>{
      console.log(text.id,e.target.id)
      if(text.id == e.target.id){
        text.classList.toggle('show-text')
      }
     })
    })
  })
 
   
}
showText()