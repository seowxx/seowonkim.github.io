document.addEventListener("click",handleDocumentClick)

function handleDocumentClick(evt){
	console.log(evt)

	document.getElementById("car").style.backgroundColor="hotpink"
	document.getElementById("wheel").style.backgroundColor="hotpink"
	document.getElementById("wheel2").style.backgroundColor="hotpink"

if (document.body.style.backgroundColor == "pink") {

	document.body.style.backgroundColor = "white"
} else { 
	document.body.style.backgroundColor = "pink"
	}
}


document.addEventListener("keypress",handleKeyPress)

function handleKeyPress (evt) {
	var key = evt.key
	console.log(evt)
	var totalWidth = document.body.offsetWidth

document.getElementById("bottom").style.backgroundColor="hotpink"
document.getElementById("wheel3").style.backgroundColor="hotpink"
document.getElementById("wheel4").style.backgroundColor="hotpink"
document.getElementById("car2").style.backgroundColor="hotpink"
document.getElementById("car3").style.backgroundColor="hotpink"

if (document.style.backgroundColor == "hotpink") {

	document.style.backgroundColor = "white"
} else {
	document.style.backgroundColor = "hotpink"
	}

}


