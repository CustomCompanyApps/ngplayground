var splashBtn = document.getElementById("splash")
var nameTxt = document.getElementById("name")
var div = document.getElementById("div")

splashBtn.addEventListener( 'click', function () {
    div.innerHTML = nameTxt.value
} )
