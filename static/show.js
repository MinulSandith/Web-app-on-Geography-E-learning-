$(document).ready(function(){
var timesClicked = 0;

$("#m").click(function() {
    timesClicked++;

    if (timesClicked%2==0) {

			 document.getElementById("learndown").classList.remove("learnShow");
			     document.getElementById("learndown-content").classList.remove("learnShow");



    } else {
       document.getElementById("learndown").classList.add("learnShow");
			     document.getElementById("learndown-content").classList.add("learnShow");

    }

})
var timesClicked1 = 0;

$("#m1").click(function() {
    timesClicked1++;

    if (timesClicked1%2==0) {

			 document.getElementById("learndown").classList.remove("learnShow");
			     document.getElementById("learndown-content1").classList.remove("learnShow");



    } else {
       document.getElementById("learndown").classList.add("learnShow");
			     document.getElementById("learndown-content1").classList.add("learnShow");

    }

})



});
