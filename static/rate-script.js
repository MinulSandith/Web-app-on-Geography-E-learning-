var rateStar = 0;

function a() {
	document.getElementById('a').style.color = 'orange';
	rateStar = 1;
	document.getElementById("number-star").innerHTML = "Stars:1";
  document.getElementById('b').style.color = 'white';
  document.getElementById('c').style.color = 'white';
  document.getElementById('d').style.color = 'white';
  document.getElementById('e').style.color = 'white';
}

function b() {
	document.getElementById('a').style.color = 'orange';
	document.getElementById('b').style.color = 'orange';
	rateStar = 2;
	document.getElementById("number-star").innerHTML = "Stars:2";
  document.getElementById('c').style.color = 'white';
  document.getElementById('d').style.color = 'white';
  document.getElementById('e').style.color = 'white';
}

function c() {
	document.getElementById('a').style.color = 'orange';
	document.getElementById('b').style.color = 'orange';
	document.getElementById('c').style.color = 'orange';
	rateStar = 3;
	document.getElementById("number-star").innerHTML = "Stars:3";  document.getElementById('d').style.color = 'white';
    document.getElementById('e').style.color = 'white';
}

function d() {  document.getElementById('e').style.color = 'white';
	document.getElementById('a').style.color = 'orange';
	document.getElementById('b').style.color = 'orange';
	document.getElementById('c').style.color = 'orange';
	document.getElementById('d').style.color = 'orange';
	rateStar = 4;
	document.getElementById("number-star").innerHTML = "Stars:4";
}

function e() {
	document.getElementById('a').style.color = 'orange';
	document.getElementById('b').style.color = 'orange';
	document.getElementById('c').style.color = 'orange';
	document.getElementById('d').style.color = 'orange';
	document.getElementById('e').style.color = 'orange';
	rateStar = 5;
	document.getElementById("number-star").innerHTML = "Stars:5";
}
var close = document.getElementsByClassName("rate-closebtn");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.opacity = "0";
		setTimeout(function () {
			div.style.display = "none";
		}, 600);
	}
}

function rateSubmit() {
	if (rateStar === 0) {
		document.getElementById("thanksReply").innerHTML = "But we are so sad.We will try our best to develop this.";
	}
	if (rateStar === 1) {
		document.getElementById("thanksReply").innerHTML = "We will develop this as you will give us 5 stars next time.";
	}
	if (rateStar === 2) {
		document.getElementById("thanksReply").innerHTML = "We will develop this and make give us 5 stars next time.";
	}
	if (rateStar === 3) {
		document.getElementById("thanksReply").innerHTML = "It is fair to hear that.";
	}
	if (rateStar === 4) {
		document.getElementById("thanksReply").innerHTML = "We are happy to hear it.";
	}
	if (rateStar === 5) {
		document.getElementById("thanksReply").innerHTML = "We are very happy about it";
	}
}
