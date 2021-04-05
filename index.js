/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  let time = str.split(':').join('')  
  time = parseInt(time);
  if (time < 1200) {
    return "Good Morning";
  }
  else if (time >= 1200 && time < 1700) {
    return 'Good Afternoon';
  }
  else  {
    return 'Good Evening';
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string
  
}
