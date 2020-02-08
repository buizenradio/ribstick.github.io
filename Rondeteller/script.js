var button = document.getElementById("clickme"),
  count = 25;
button.onclick = function() {
  count -= 1;
  if (count >= 0) 
  button.innerHTML = " " + count;
  else
  location.reload(true);

};
