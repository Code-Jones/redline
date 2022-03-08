// parallax
(function() {
    const elem = document.getElementById("parallax");
    elem.addEventListener("mousemove", parallax);
    elem.addEventListener("touchmove", parallax);
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();

// updating year
document.getElementById('currentYear').innerText = new Date().getFullYear();

// load on top of screen
window.onload = function() {
    window.scrollTo(0,0);
}

