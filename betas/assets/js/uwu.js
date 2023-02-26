window.onkeyup = keyup;

//creates a global Javascript variable
var easter;

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  secretInput = document.getElementById('secretInput');

  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 192 || e.keyCode == 189) {
    $("#fun").toast("show");
secretInput.focus();
    
  }

  
  if (secretInput.value == "rickroll") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "hansa") {
    window.open("https://nuttapongs.com/files/stashes/aGFuc2E%3D.JPG", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "mumu" || secretInput.value == "nugget") {
    window.open("https://nuttapongs.com/files/stashes/mumu.JPG", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "modernlove") {
    window.open("https://www.youtube.com/watch?v=b8OnjZlxEOE", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "d43f-cl-rel") {
    window.open("https://nuttapongs.com/files/stashes/ds2/eiei.pdf", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "capybara") {
    window.open("https://www.youtube.com/watch?v=WbjyfvaH7Ko", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "maxwell") {
    window.open("https://www.youtube.com/watch?v=YRvOePz2OqQ", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "yee") {
    window.open("https://www.youtube.com/watch?v=q6EoRBvdVPQ", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "aaaaaaaaaaaaaaaaaaaaaaaaaa") {
    window.open("https://youtu.be/rvrZJ5C_Nwg?t=139", '_blank');
    secretInput.value = "";
  };

  if (secretInput.value == "instagram") {
    window.open("https://www.instagram.com/ntnntp", '_blank');
    secretInput.value = "";
  };
    

}