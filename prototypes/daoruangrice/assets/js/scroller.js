
if (document.getElementById("topnav") == null) {
	var offH = document.getElementById("xnav").offsetHeight;
} else {
	var offH = document.getElementById("topnav").offsetTop;
};

window.onresize = function() {
	

if (document.getElementById("topnav") == null) {
	var offH = document.getElementById("xnav").offsetHeight;
} else {
	var offH = document.getElementById("topnav").offsetTop;
};

};

setInterval(() => {
	
	document.getElementById("body").onmousemove = function() {
	 

		if ($('#collapse-1:hover').length || $('#topnav:hover').length != 0) {
			null;
		} else {
			$('#collapse-1').collapse("hide");
		};
	};

  }, 1000);

function toTop() {
	window.scrollTo({
		 top: 0,
		 behavior: "smooth"
	});
	document.getElementById('btt').classList.add("justHide");
	$('#collapse-mobnav').collapse("hide");
}


function toBookmark1() {
	window.scrollTo({
		 top: document.getElementById("mark-1").offsetTop-(offH),
		 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark2() {
	window.scrollTo({
		 top: document.getElementById("mark-2").offsetTop-(offH*2),
		 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark3() {
	window.scrollTo({
	 top: document.getElementById("mark-3").offsetTop-(offH*2),
	 behavior: "smooth"
});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark4() {
	window.scrollTo({
	 top: document.getElementById("mark-4").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark5() {
	window.scrollTo({
	 top: document.getElementById("mark-5").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark6() {
	window.scrollTo({
	 top: document.getElementById("mark-6").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark7() {
	window.scrollTo({
	 top: document.getElementById("mark-7").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark8() {
	window.scrollTo({
	 top: document.getElementById("mark-8").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
}

function toBookmark9() {
	window.scrollTo({
	 top: document.getElementById("mark-9").offsetTop-(offH*2),
	 behavior: "smooth"
	});
	$('#collapse-mobnav').collapse("hide");
	
}

//SUBNAV STYLERS


// Navbar scroll themer


var sDist = window.innerHeight - 30;
//var posIndicate = window.innerHeight * 0.25;
let xurl = window.location.href;




//For project details page - the one with scroll hide shit

window.addEventListener('scroll', function() {
    
	var element = document.querySelector('#title');
    var position = element.getBoundingClientRect();
	var navScrollCheck = position.top >= 0 && position.bottom <= window.innerHeight
    
	$('#minititle').toggleClass('justHide', navScrollCheck);
	$('#btt').toggleClass('justHide', navScrollCheck);
    


});

$( "#topnav" ).hover(
    function() {$('#collapse-1').collapse("show");},
    function() {$('#collapse-1').collapse("hide");}
);