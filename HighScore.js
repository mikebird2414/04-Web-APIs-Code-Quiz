var userName;

//instead of prompting they need to put there name right onto the page so it can go to local storage then return as a list item.
//this way the table will stay the same when you go to the "get high scores" link

function getUserName() {
  userName = prompt("Please Enter your Name:");
  localStorage.setItem("Name", userName);

  if ((userName = "")) {
    alert("Please enter your name");
  }
}

getUserName();

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}

displayHighscores();