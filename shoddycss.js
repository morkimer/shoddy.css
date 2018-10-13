/*
    shoddy.css
    A shoddy CSS framework
    developed by Chris Shoeman and Jacob Hinkston

    Source
    JS
    v0.2
*/
var sh_viewportWidth;
var sh_viewportHeight;

function sh_ToggleSidebar() {
    var sb = document.getElementsByClassName("sh-sidebar")[0];
    var sbc = document.getElementsByClassName("sh-sidebar-cover")[0];
    if (sb.style.height == "0px" || sb.style.height == "") {
        sb.style.transition = "height 0.2s ease-out, padding 0.2s";
        sbc.style.display = "block";
        setTimeout(function(){sbc.style.background = "rgba(0,0,0,0.2)";}, 16);
        setTimeout(function(){sb.style.overflowY = "auto";}, 300);
        setTimeout(function(){sb.style.padding = "10px";sb.style.height = (sh_viewportHeight - 40) + "px";}, 100);
    }
    else {
        sb.style.transition = "height 0.2s ease-in, padding 0.2s";
        sb.style.height = "0px";
        sb.style.overflowY = "hidden";
        sb.style.padding = "0px";
        sbc.style.background = "rgba(0,0,0,0.0)";
        setTimeout(function() {sbc.style.display = "none";}, 200);
    }
}

function sh_GetWindowBounds() {
    sh_viewportWidth = window.innerWidth;
    sh_viewportHeight = window.innerHeight;
}
sh_GetWindowBounds();