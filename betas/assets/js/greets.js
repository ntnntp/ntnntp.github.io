var day = new Date();
var hr = day.getHours();
var ndate = day.getDate();
var month = day.getMonth();
var greeter = document.getElementById("greets");
var greetsMain = document.getElementById("greets-main");



/*TIME*/
if (hr >= 0 && hr < 1) {
	greeter.innerHTML = "🥱 Time for some sleep now. Have a peaceful night!";
	greetsMain.innerHTML = "Hello night owls";
}
if (hr >= 1 && hr < 4) {
	greeter.innerHTML = "😪 Looks like you'll need more sleep. Have a great night!";
	greetsMain.innerHTML = "Hello night owls";
}
if (hr >= 4 && hr < 6) {
	greeter.innerHTML = "🥱 Wow! you're up so early. Enjoy your morning!";
	greetsMain.innerHTML = "Good morning";
}
if (hr >= 6 && hr < 9) {
	greeter.innerHTML = "🥪 Fuel yourself with a good meal. Enjoy your morning!";
	greetsMain.innerHTML = "Good morning";
}
if (hr >= 9 && hr < 12) {
	greeter.innerHTML = "☕️ Don't forget to take a break. Enjoy your day!";
	greetsMain.innerHTML = "Good morning";
}
if (hr >= 12 && hr < 13) {
	greeter.innerHTML = "🍔 Time for another meal. Enjoy your lunch!";
	greetsMain.innerHTML = "Good afternoon";
}
if (hr >= 13 && hr < 16) {
	greeter.innerHTML = "💧 Drink plenty of water. Enjoy your afternoon!";
	greetsMain.innerHTML = "Good afternoon";
}
if (hr >= 16 && hr < 18) {
	greeter.innerHTML = "🍃 How's your day so far.  I bet you had a wonderful day!";
	greetsMain.innerHTML = "Good evening";
}
if (hr >= 18 && hr < 19) {
	greeter.innerHTML = "🏡 Have a safe trip back home. Also, enjoy your dinner!";
	greetsMain.innerHTML = "Good evening";
}
if (hr >= 19 && hr < 22) {
	greeter.innerHTML = "🧘 Time to reunite with yourself. Have a peaceful night!";
	greetsMain.innerHTML = "Good evening";
}
if (hr >= 22 && hr < 24) {
	greeter.innerHTML = "🛌 Time to recharge yourself. Have a peaceful night!";
	greetsMain.innerHTML = "Hello night owls";
}

/*OCCASIONS*/
if (month == 10 && ndate == 19) {
	greeter.innerHTML = "FYI, 🎂 today nuttapong turns " + (day.getFullYear()-1999) + ". Have a nice day!";
 }
if (month == 11 && ndate == 25) {
	greeter.innerHTML = "Merry christmas 🎄 and have a nice day!";
	greetsMain.innerHTML = "🎄 Merry Christmas";
  }  
if (month == 0 && ndate <= 4) {
	greeter.innerHTML = "Happy new year! 🎆 have a wonderful "+day.getFullYear()+"!";
	greetsMain.innerHTML = "🎆 Happy new year";
}

