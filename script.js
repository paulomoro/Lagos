const firstbox = document.querySelector('#firstObserver');
const box = document.querySelector('#observer');
const targetElement =document.querySelector('#LagosText');

// const callbackFunction = (entries) => {
//   boxEntries = entries[0].isIntersecting; 
//   console.log(boxEntries);
// }

// const observer = new IntersectionObserver(callbackFunction);

// observer.observe(box)

const firstObserver = new IntersectionObserver((event) => {
  event.forEach(event =>{
    if(event.isIntersecting === false){
      targetElement.classList.replace('dockToCenter', 'dockToTop')
    }else{
      targetElement.classList.replace('dockToTop', 'dockToCenter')
    }
  })
})

const newObserver =  new IntersectionObserver((event) => {
  
  event.forEach(i => {
    if(i.isIntersecting === false){
      targetElement.classList.replace('dockToCenter', 'dockToTop')
    }else{
      targetElement.classList.replace('dockToTop', 'dockToCenter')
    }
  })
})


firstObserver.observe(firstbox)
newObserver.observe(box)

// window.scroll(document.querySelector('#pageMenu'))