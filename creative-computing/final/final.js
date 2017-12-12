
window.addEventListener("mousemove",handleMouseMove)
function handleMouseMove(evt) {
	 var x=(evt.pageX/window.innerWidth)*255
    var y=(evt.pageY/window.innerHeight)*255

    x =Math.round(x)
    y =Math.round(y)

     var rgbString="rgb("+x+","+y+",255)"

     console.log(rgbString)
     document.body.style.backgroundColor=rgbString
}

function playSound(item) {
	console.log(item);
	const audio=document.getElementById(item);
	if (audio.paused)	{
		audio.play();
	}
	else {
		audio.pause();
	}
}

