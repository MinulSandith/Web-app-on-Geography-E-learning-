var ab=0;var count=0;
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("overlayClose").classList.remove("overlayHide");
  document.getElementById("overlayClose").classList.add("overlayShow");
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("overlayClose").classList.remove("overlayShow");
  document.getElementById("overlayClose").classList.add("overlayHide");
}
function openRate() {
  
  if (count===0){
  document.getElementById("rate").style.width = "100%";
  document.getElementById("rateClose").classList.remove("overlayHide");
  document.getElementById("rateClose").classList.add("overlayShow");}
  if (count===1){alert("You only can submit one response\nThank you for rating us.!")}count=1;
}

function closeRate() {
  document.getElementById("rate").style.width = "0%";
  document.getElementById("rateClose").classList.remove("overlayShow");
  document.getElementById("rateClose").classList.add("overlayHide");
}
//css changer mynavjs

document.getElementById("overlayClose").classList.remove("overlayShow");
document.getElementById("overlayClose").classList.add("overlayHide");
document.getElementById("rateClose").classList.remove("overlayShow");
document.getElementById("rateClose").classList.add("overlayHide");
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
  {
    if (/iPhone/i.test(navigator.userAgent)&& ab===0)
     {
      alert("Your view this websites using iPhones is not managed\n we recomend  use landscape in oriention of iPhone,\nRecommended to use a pc,laptop\nSorry for the inconvinience");ab=1;

    }
    if (/iPad/i.test(navigator.userAgent)&& ab===0)
     {
      alert("You can't view these type of websites using iPads for a certain extend\n you can change the oriention to landscape,\nRecommended to use a laptop,pc\nSorry for the inconvinience");ab=1;

    }
    if (/Android/i.test(navigator.userAgent)&& ab===0)
     {
      alert("You can't view these type of websites using Androids for a certain extend\n  change the oriention to landscape,\nRecommended to use a laptop,pc\nSorry for the inconvinience");ab=1;

    }
    if (/webOS|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&& ab===0)
     {
      alert("You can't  view these type of websites using this phone for a certain extend\n  change the oriention to landscape,\nRecommended to use a laptop,pc\nSorry for the inconvinience");ab=1;

    }
  }



var y=2;
var y = document.getElementById("myText").value;
