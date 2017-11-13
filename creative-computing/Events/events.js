document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {
	var key = evt.key
	console.log(key)

	var totalHeight = document.body.offsetHeight

	var percentage = key / 9
	console.log("%",percentage)

	var targetHeight = percentage + totalHeight
	console.log("px",targetHeight)

	window.scroll(0,key * 20)

}