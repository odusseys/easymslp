var e = document.getElementById("sm_dl_wait");
if(e){
  var a = document.createElement('a');
  a.appendChild(document.createTextNode("Click here to download without waiting!"));
  a.title = "clicky clicky";
  a.href = e.getAttribute("data-id");;
  e.parentElement.appendChild(a);
  e.remove();
}
