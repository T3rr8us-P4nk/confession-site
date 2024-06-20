document.getElementById("yesButton").addEventListener("click", function() {
    alert("Yay, Are you free this Saturday?");
});

function getRandomPosition() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    return [x, y];
}

document.getElementById("noButton").addEventListener("click", function() {
    var button = document.getElementById("noButton");
    var newPosition = getRandomPosition();
    button.style.position = "absolute";
    button.style.left = newPosition[0] + "px";
    button.style.top = newPosition[1] + "px";
});