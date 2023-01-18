window.onscroll = function() {Scrolling()};

function Scrolling() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("scrollbutton").style.display = "block";
  } else {
    document.getElementById("scrollbutton").style.display = "none";
  }
}

function Topscrolling() {
  document.documentElement.scrollTop = 0;
}
