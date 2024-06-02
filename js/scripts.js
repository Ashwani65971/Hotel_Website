    //js code for home slider
function swiperFunc()
{
	  var swiper = new Swiper(".slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      grabCursor: true,
      // cubeEffect: {
      //   shadow: true,
      //   slideShadows: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94,
      // },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

if(swiperFunc())
{
	swiperFunc();
}

// swiper js code for Testimonials swiper
function TestiMonialsSwip()
{
var swiper = new Swiper(".testimonials-Swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      // freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,

    },
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints:
        {
           0://slide arrangements according to pixels
            {
                slidesPerView:1,
            },
          874://slide arrangements according to pixels
            {
                slidesPerView:2,
            },
          950://slide arrangements according to pixels
            {
                slidesPerView:3,
            },
          1300://slide arrangements according to pixels
            {
                slidesPerView:3,
            },
        }
    });
}

if(TestiMonialsSwip)
{
  TestiMonialsSwip();
}

// js code for open the search filter popup
let searchIcon = document.querySelector('#searchIcon');
let searchBox = document.querySelector('.searchBox');

searchIcon.addEventListener('click',()=>{
	if(searchIcon && searchBox)
	{
		searchBox.classList.toggle('active');
	}

})

// js code for hamburger menu
let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar ul');

menu.addEventListener('click',()=>{
	if(menu && navbar)
	{
		navbar.classList.toggle('active');
		menu.classList.toggle('active');
	}
})


// increment and decrement counter for booking section spans adults
let decrement = document.querySelector('.decrement');
let CounterAdult = document.querySelector('.counterNum');
let increment = document.querySelector('.increment');
let numValue = 1;


if(increment)
{
  increment.addEventListener('click',()=>{
    numValue++;
    if(numValue < 10)
    {
      numValue = `0${numValue}`;
    }
     CounterAdult.innerText = numValue;
    
  })
  
}
if(decrement)
{

decrement.addEventListener('click',()=>{
  
  if(numValue > 1)
  {
    numValue--;
    if(numValue < 10)
    {
       numValue = `0${numValue}`;
    }
    
  }
  CounterAdult.innerText = numValue;
})
}

//number counter for children counter
let childDecrement = document.querySelector('.decrementChild');
let childCounter = document.querySelector('.counterNumChild');
let childIncrement = document.querySelector('.incrementChild');

let childNum = 0;

if(childIncrement)
{
childIncrement.addEventListener('click',()=>{
  childNum++;
  if(childNum < 10)
  {
    childNum = `0${childNum}`;
  }
  childCounter.innerText = childNum;
})
}

if(childDecrement)
{
  childDecrement.addEventListener('click',()=>{
    if(childNum > 0)
    {
      childNum--;
       if(childNum < 10)
       {
        childNum = `0${childNum}`
       }
    }
    childCounter.innerText = childNum;
  })
}



// js code for room description gallery
function descriptionGallery()
{
let bottomDescriptionImages = document.querySelectorAll('.bottomDescription-images img');
let largeImageDisplay = document.querySelector('.bigDiscriptionImage img');
let largeImageContainer = document.querySelector('.bigDiscriptionImage');
if(bottomDescriptionImages && largeImageDisplay && largeImageContainer)
{

bottomDescriptionImages.forEach(function(clickImg){
  clickImg.addEventListener('click',()=>{
    bottomDescriptionImages.forEach(function(removeImg){
      removeImg.classList.remove('active');
    })
    clickImg.classList.add('active');
    largeImageDisplay.src = clickImg.getAttribute('src');
  })
})

largeImageContainer.addEventListener('mousemove',function(dets){
   let xValue = dets.clientX;
   let yValue = dets.clientY;

   let ImageDisplayWidth = largeImageDisplay.offsetLeft;
   let ImageDisplayHeight = largeImageDisplay.offsetTop;

   let differX = xValue - ImageDisplayWidth;
   let differY = yValue - ImageDisplayHeight;

   // console.log(differX, differY);

   largeImageDisplay.style.transformOrigin = `${differX}px ${differY}px`;
   largeImageDisplay.style.transform = `scale(1.5)`;

})

largeImageContainer.addEventListener('mouseleave',function(dets){
   largeImageDisplay.style.transform = "";
})
}
}
if(descriptionGallery())
{
  descriptionGallery();
}

// js code for open the equiry form 
let bookingBtn = document.querySelector('.bookingBtn');
let enquireform = document.querySelector('.enquire-now');
let enquireformCut = document.querySelector('.cut-form');
let enquireformInputs = document.querySelectorAll('.enquire-now-fields input');
if(bookingBtn && enquireform)
  {
    bookingBtn.addEventListener('click',()=>{
      enquireform.classList.add('active');
    })
  }

if(enquireformCut && enquireformInputs)
  {
    enquireformCut.addEventListener('click',()=>{
      enquireform.classList.remove('active');
      enquireformInputs.forEach((targetInputs)=>{
        targetInputs.value = "";
      })
    })
  }

let videoplayer = document.querySelector('.videoplayer');
let playImg = document.querySelector('.video-preview-video .play-img');
function playVideo()
{
  playImg.classList.toggle('active');
}