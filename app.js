/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/


const calculator = document.querySelector('#calculator');
const addButtonOperator = document.querySelector('+')
subtractButtonOperator = document.querySelector('-')
mulitpyButtonOperator = document.querySelector('*')
divideButtonOperator = document.querySelector('/')
buttonNumber = document.querySelector('0-9')
clearButtonOperator = document.querySelector('C')
buttonEquals = document.querySelector('=')


calculator.addEventListener('click', (value) => {

 console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }
});





addButtonOperator.addEventListener('click'), () => {
  console.log(buttonNumber+buttonNumber);
}
subtractButtonOperator.addEventListener('click'), () =>
mulitpyButtonOperator.addEventListener('click'), () =>
divideButtonOperator.addEventListener('click'), () =>
buttonNumber.addEventListener('click'), (0-9)
clearButtonOperator.addEventListener('click'), () =>
buttonEquals.addEventListener('click'),(){
  
}
  
 


