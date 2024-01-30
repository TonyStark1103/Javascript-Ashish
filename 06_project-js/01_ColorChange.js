// const g = document.querySelector('#grey');
// g.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'grey';
// });
// const w = document.querySelector('#white');
// w.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'white';
// });
// const y = document.querySelector('#yellow');
// y.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'yellow';
// });
// const b = document.querySelector('#blue');
// b.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'blue';
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
console.log(buttons);

buttons.forEach( (button) => {
  button.addEventListener("click", (e)=>{
    console.log(e.target)
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
  });
});
