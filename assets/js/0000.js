window.onload = function() {
  console.log(jQuery('#modal-1').modal('show'));
};

document.getElementById('survTopic').innerHTML = "You dismissed the survey";
document.getElementById('survResults').innerHTML = "No hard feelings, but I think I proved my point. You ingored the survey. But no worries, it's not just you...";


document.getElementById('survRespond').onclick = function(){
  document.getElementById('survResults').innerHTML = "Looks like you just responded the survey, but most people were bothered by it...";
  document.getElementById('survTopic').innerHTML = "Well, unlike you...";
}

document.getElementById('survDismiss').onclick = function(){
  document.getElementById('survTopic').innerHTML = "You skipped the survey";
  document.getElementById('survResults').innerHTML = "No hard feelings, but I think I proved my point. You have just intentionally skipped the survey. But no worries, it's not just you...";
}

document.getElementById("js-disabled").style.display = "none";