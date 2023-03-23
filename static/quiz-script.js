var x = 1;

function aa() {
	x = 2;
	document.getElementById("check1").classList.add('fas');
	document.getElementById("check1").classList.remove('far');
		document.getElementById("check2").classList.add('far');
	document.getElementById("check2").classList.remove('fas');
}

function answer() {
	if (x === 2) {
		document.getElementById("a").innerHTML = "We are very happy about it";
	}
	if (x === 3) {
		document.getElementById("a").innerHTML = "We ";
	}
}

function ab() {
	x = 3;
	document.getElementById("check2").classList.add('fas');
	document.getElementById("check2").classList.remove('far');
		document.getElementById("check1").classList.add('far');
	document.getElementById("check1").classList.remove('fas');
}
// 52489C     17C3B2       E4572E       B7ADCF            E9EB87  