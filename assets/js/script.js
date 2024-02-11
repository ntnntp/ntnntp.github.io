document.getElementById('life-collapse').addEventListener('shown.bs.collapse', event => {
  // do something...
    document.getElementById("life-collapse-indicator").innerHTML = "Hide section";
})

document.getElementById('life-collapse').addEventListener('hidden.bs.collapse', event => {
  // do something...
    document.getElementById("life-collapse-indicator").innerHTML = "Show section";
})



