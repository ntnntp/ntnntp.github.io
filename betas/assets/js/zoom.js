var userflow = document.getElementById('img-userflow');
var btnZoomIn = document.getElementById('btn-zoom-in');
var btnZoomOut = document.getElementById('btn-zoom-out');

var zoomLevel = 200;
var zoomStep = 100;

userflow.style.width = zoomLevel + "%";
userflow.style.height = zoomLevel + "%";

btnZoomIn.onclick = function(){

    if (zoomLevel >= 100) {

        zoomLevel = zoomLevel + zoomStep;
        userflow.style.width = zoomLevel + "%";
        userflow.style.height = zoomLevel + "%";

    } 
    
    else {

        zoomLevel = 100

    };

    console.log(zoomLevel);

};


btnZoomOut.onclick = function(){

    if (zoomLevel >= 100) {

        zoomLevel = zoomLevel - zoomStep;
        userflow.style.width = zoomLevel + "%";
        userflow.style.height = zoomLevel + "%";

    } 
    
    else {

        zoomLevel = 100

    };

    console.log(zoomLevel);

};