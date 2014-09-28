$(window).load(function(){
  window.addEventListener("scroll", navbar_reset_top,false);

var navbar_top=550;

function navbar_reset_top() {
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
  if(scrollTop>navbar_top&&navbar.className==="navbar__absolute") {
    document.getElementById("navbar").className="navbar__fixed";
  }
  else if(scrollTop<navbar_top&&navbar.className==="navbar__fixed") {
    document.getElementById("navbar").className="navbar__absolute";
  }
}
});
