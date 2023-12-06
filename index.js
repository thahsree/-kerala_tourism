let more = document.getElementById('more-btn');
morePlace =document.getElementById('morePlace-btn');
let place_container2 = document.getElementById('place-container2');
let beach_container2 = document.getElementById('beach-container2');
let place_container1 = document.getElementById('place-container1');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');

let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');
let slide5 = document.getElementById('slide5');
let slide6 = document.getElementById('slide6');

let images = [item1, item2, item3, item4, item5, item6];
let slides = [slide1, slide2, slide3, slide4, slide5, slide6];

let currentIndex = 0;

function switchActive() {
  let nextIndex = (currentIndex + 1) % 6;

  images[currentIndex].classList.remove('active');
  slides[currentIndex].classList.remove('active');

  images[nextIndex].classList.add('active');
  slides[nextIndex].classList.add('active');

  currentIndex = nextIndex;
}

window.addEventListener('load', () => {
  switchActive(); // Initial setup

  setInterval(() => {
    switchActive();
  }, 6000);
});

more.addEventListener('click',()=>{
   if(place_container2.style.display==="none"){
        place_container2.style.display="flex";
        more.innerHTML="Hide"
   }else{
    place_container2.style.display="none";
    more.innerHTML="More Places"
   }
})
morePlace.addEventListener('click',()=>{
    if(beach_container2.style.display==="none"){
         beach_container2.style.display="flex";
         morePlace.innerHTML="Hide"
    }else{
     beach_container2.style.display="none";
     morePlace.innerHTML="More Beaches"
    }
 })
