document.addEventListener('DOMContentLoaded', function() {
    var e = document.getElementById("sm_dl_wait");
    console.log("element : ", e)
    if(e){
      console.log("adding link!")
      var a = document.createElement('a');
      a.appendChild(document.createTextNode("Click here to download without waiting!"));
      a.title = "clicky clicky";
      a.href = e.getAttribute("data-id");;
      e.parentElement.appendChild(a);
    }
});
