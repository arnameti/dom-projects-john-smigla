"use strict";

/*
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const value = document.querySelector('#value');

let counter = 0;


increase.addEventListener('click', function () {
  counter++;
  value.textContent = counter;

  if (counter > 0)  {
    value.style.color = 'green'; 
  } else if (counter === 0) {
    value.style.color = 'black'; 
  }
})

decrease.addEventListener('click', function () {
  counter--;
  value.textContent = counter;
  
  if (counter < 0)  {
    value.style.color = 'red'; 
  } else if (counter === 0) {
    value.style.color = 'black'; 
  }
})

reset.addEventListener('click', function () {
  counter = 0;
  value.textContent = counter;
  value.style.color = 'black'; 
})
*/

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);

    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
    } else if (counter < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    
    value.textContent = counter;
  });
});
