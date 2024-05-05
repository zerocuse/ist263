function showInfo(id, more) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById(more);
    if (x.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}