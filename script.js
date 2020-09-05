const box = document.querySelector('#observer');
let boxEntries;
const targetElement =document.querySelector('#LagosText');

// const callbackFunction = (entries) => {
//   boxEntries = entries[0].isIntersecting;
//   console.log(boxEntries);
// }

// const observer = new IntersectionObserver(callbackFunction);

// observer.observe(box)


const newObserver =  new IntersectionObserver((entries, observer) => {
  boxEntries = entries[0].isIntersecting;
  console.log(boxEntries);
})

newObserver.observe(box)

console.log(boxEntries)