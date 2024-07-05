document.getElementById('menu_icon').onclick = function() {
    document.getElementById('menu_modal').style.display = "block";
}

document.getElementById('close_modal').onclick = function() {
    document.getElementById('menu_modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('menu_modal')) {
        document.getElementById('menu_modal').style.display = "none";
    }
}
