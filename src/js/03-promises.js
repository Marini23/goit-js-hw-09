import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  button: document.querySelector('button'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.button.addEventListener('click', onPromiseSubmit);
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    },delay);
    
  });
}

function onPromiseSubmit(e) {
  e.preventDefault();

  let valueDelay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);
  

  
  for (let i = 1; i <= amount; i += 1) {
    
    if (i !== 1) {
    valueDelay = step * i - step;
    }

    createPromise(i, valueDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    console.log(valueDelay);
    
  }
}


// ------