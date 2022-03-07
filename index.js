$(document).ready(function(){
  
  //Check browser if in desktop mode
  window.deviceCheck = function() {
    var check = false;
    if (window.innerWidth > 800) {
      check = true;
    }
    return check;
  }
  if(window.deviceCheck()){
      document.getElementsByTagName("body")[0].style.display="none";
      window.alert("Sorry but the page is currently not available on desktop mode or higher than 800pixels screen wide.\nIf you want to use this site, you can drog your browsers border to change it size to mobile view.");
  }
  
  $("#back_arrow a").attr("href","index.html")
  
});
