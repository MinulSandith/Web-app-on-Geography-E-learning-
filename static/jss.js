/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var js=0;
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if(js===0){
  document.getElementById('dropbtn').style.color = 'rgb(0,0,0,0)';
   document.getElementById('navjs').style.color = 'rgb(0,0,0,0)';
    document.getElementById('navjs1').style.color = 'rgb(0,0,0,0)';
	 document.getElementById('navjs2').style.color = 'rgb(0,0,0,0)';js=5;
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
		if(js=5) {document.getElementById('dropbtn').style.color = '#818181';
   document.getElementById('navjs').style.color = '#818181';
    document.getElementById('navjs1').style.color = '#818181';
	 document.getElementById('navjs2').style.color = '#818181';
		js=0;}
      }
    }
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
//css changer mynavjs
