/* shoddy.css v0.4.0, developed by Chris Shoeman, Michael Cohagan, Ben Shoeman, Jacob Hinkston */

var sh_viewportWidth;
var sh_viewportHeight;

function sh_ToggleSidebar() {
    var sb = document.getElementsByClassName("sh-sidebar")[0];
    var sbc = document.getElementsByClassName("sh-sidebar-cover")[0];
    if (sb.style.height == "0px" || sb.style.height == "") {
        if (sb.style.transition != ""){sb.style.transition = "height 0.2s ease-out, padding 0.2s";}
        sbc.style.display = "block";
        setTimeout(function(){sbc.style.background = "rgba(0,0,0,0.2)";}, 16);
        setTimeout(function(){sb.style.padding = "10px";sb.style.height = (sh_viewportHeight - 40) + "px";}, 100);
    }
    else {
        if (sb.style.transition != ""){sb.style.transition = "height 0.2s ease-in, padding 0.2s";}
        sb.style.height = "0px";
        sb.style.padding = "0px";
        sbc.style.background = "rgba(0,0,0,0.0)";
        setTimeout(function() {sbc.style.display = "none";}, 200);
    }
}

/* Alerts */
function sh_InitAlerts() {
    var salert = document.createElement("div");
    salert.className = "sh-alert sh-shadow-6 sh-bg-white";
    document.body.appendChild(salert);
    var scover = document.createElement("div");
    scover.className = "sh-alert-cover";
    scover.id = "sh-alert-cover";
    document.body.appendChild(scover);
}
sh_InitAlerts();
function sh_Alert(title, text) {
    if (title == "" && text == ""){console.warn("shoddy.css error, attempted to send an empty alert!");return false;}
    var salert = document.getElementsByClassName("sh-alert")[0];
    var scover = document.getElementById("sh-alert-cover");
    if (salert.style.transition != "") {salert.style.transition = "transform 0.15s ease-out, opacity 0.15s";}
    salert.innerHTML = "<div class='sh-alert-title'>"+title+"</div><div class='sh-alert-text'>"+text+"</div><div class='sh-alert-buttons'><div onclick='sh_CloseAlert()'>OK</div></div>";
    salert.style.display = "block";
    scover.style.display = "block";
    setTimeout(function(){salert.style.transform = "scale(1.0)";salert.style.opacity = "1.0";scover.style.background = "rgba(0,0,0,0.2)";},16);
}
function sh_CloseAlert() {
    var salert = document.getElementsByClassName("sh-alert")[0];
    var scover = document.getElementById("sh-alert-cover");
    if (salert.style.transition != "") {salert.style.transition = "transform 0.15s ease-in, opacity 0.15s";}
    scover.style.background = "rgba(0,0,0,0.0)";
    setTimeout(function(){salert.style.transform = "scale(0.66)";salert.style.opacity = "0.0";},16);
    setTimeout(function(){salert.style.display = "none";},166);
    setTimeout(function(){scover.style.display = "none";},200);
}
/* Bars */
function sh_Toast(text,time,scale) {
    if (!time) {time = 4000;}
    if (!scale) {scale = 1.0;}
    if (!text){console.warn("shoddy.css error, attempted to send an empty toast!");return false;}
    var bar = document.createElement("div");
    bar.className = "sh-toast sh-shadow-6";
    bar.innerHTML = "<div class='sh-toast-text'>"+text+"</div>";
    bar.style.transform="scale("+scale+")";
    document.body.appendChild(bar);
    setTimeout(function(){bar.style.bottom = "15px";bar.style.opacity = 1.0;},16);
    setTimeout(function(){bar.style.bottom = "0";bar.style.opacity = 0.0;},16+(time));
    setTimeout(function(){if(!!bar){}else{bar.parentNode.removeChild(bar);}},4216)
    bar.addEventListener("click", function() {setTimeout(function(){bar.style.bottom = "0";bar.style.opacity=0.0;},16);setTimeout(function(){bar.parentNode.removeChild(bar);},216)});
}


/* Dropdowns */
var sh_dds = document.getElementsByClassName("sh-dropdown-button");
var i;
for (i = 0; i < sh_dds.length; i++) {
    sh_dds[i].onclick = function() {
        var d = this.parentNode.children;
        for (var i = 0; i < d.length; i++) {
            if (!d[i].className){break;}
            else {
                if (d[i].className.includes("sh-dropdown-items")) {
                    d[i].classList.toggle("sh-dropdown-active");
                    break;
                }
            }
        }
    };
}
window.onclick = function(event) {
  if (!event.target.matches('.sh-dropdown-button')) {
    var add = document.getElementsByClassName("sh-dropdown-items");
    var i;
    for (i = 0; i < add.length; i++) {
      if (add[i].classList.contains('sh-dropdown-active')) {
        add[i].classList.remove('sh-dropdown-active');
      }
    }
  }
} 

/* General initialization */
function sh_GetWindowBounds() {
    sh_viewportWidth = window.innerWidth;
    sh_viewportHeight = window.innerHeight;
}
function sh_Hero() {
    var e = document.querySelectorAll(".sh-hero");
    if (!e) {return false;}
    var a = e.length;
    if (!a) {return false;}
    var i;
    for (i = 0; i < a; i++) {
        var img = e[i].style.backgroundImage;
        e[i].style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," + img;
    }
}
function sh_DropDown() {
    var e = document.querySelectorAll(".sh-dropdown-button");
    for (var i = 0; i < e.length; i++) {
        e[i].innerHTML += '<span class="sh-dropdown-button-arrow">&#9662;</span>';
    }
}
sh_GetWindowBounds();sh_Hero();sh_DropDown();