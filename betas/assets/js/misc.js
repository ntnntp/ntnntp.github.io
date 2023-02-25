var wcbad = [
  {text: "appearance", weight: 11},
  {text: "complicated", weight: 7},
  {text: "search", weight: 4},
  {text: "auto-logout", weight: 4},
  {text: "backend", weight: 2},
  {text: "not confident", weight: 2},
  {text: "sidebar", weight: 1},
  {text: "no mobile version", weight: 1},
  {text: "login process", weight: 1},
  {text: "well... everything", weight: 1},
  {text: "captcha sound", weight: 1},
];

var wcgood = [
  {text: "none", weight: 11},
  {text: "it worked", weight: 4},
  {text: "timetable", weight: 1},
  {text: "simple", weight: 1},
  {text: "search", weight: 1},
  {text: "many functions", weight: 1},
  {text: "informative", weight: 1},
  {text: "registrar office page", weight: 1},
  {text: "grade display", weight: 1},
];

window.onresize = function(){
  $('#wc-bad').jQCloud('update', words);  
 $('#wc-good').jQCloud('update', words);  
 };

$('#wc-bad').jQCloud(wcbad, {
  //shape: 'rectangular'
  delay: 50,
    autoResize: true,
});

$('#wc-good').jQCloud(wcgood, {
  //shape: 'rectangular'
    delay: 50,
    autoResize: true,
});
