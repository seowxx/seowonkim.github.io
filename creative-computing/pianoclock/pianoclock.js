function update() {

	var key;
	var now = new Date();

	var hour = now.getHours() % 12
	var min = now.getMinutes()
	var ampm = now.getHours() / 12 < 1 ? 'am' : 'pm'

    var whitekeys = [document.getElementById("whitec"),
    					document.getElementById("whited"),
    					document.getElementById("whitee"),
    					document.getElementById("whitef"),
    					document.getElementById("whiteg"),
    					document.getElementById("whitea"),
    					document.getElementById("whiteb") ]


	if (hour==0){
		key=document.getElementById("whitec")
	}

	else if (hour==1){
		key=document.getElementById("blackcs")
	}

	else if (hour==2){
		key=document.getElementById("whited")
	}

	else if (hour==3){
		key=document.getElementById("blackds")
	}

	else if (hour==4) {
		key=document.getElementById("whitee")
	}

	else if (hour==5) {
		key=document.getElementById("whitef")
	}

	else if (hour==6) {
		key=document.getElementById("blackfs")
	}

	else if (hour==7) {
		key=document.getElementById("whiteg")
	}

	else if (hour==8) {
		key=document.getElementById("blackgs")
	}

	else if (hour==9) {
		key=document.getElementById("whitea")
	}

	else if (hour==10) {
		key=document.getElementById("blackas")
	}

	else if (hour==11) {
		key=document.getElementById("whiteb")
	}

	style = window.getComputedStyle(key)
	height = parseInt(style.height)

	if (ampm == 'am') {
		var newMin = height + 1
	}
	else {
		var newMin = height - 1
	}

	key.setAttribute('style', 'height:'+newMin+'px')



 	console.log(ampm +  ' ' + newMin + ' ', min  )
 	if (min == 0) {
 		for (var i = 0; i < whitekeys.length; i++) {
			key2 = whitekeys[i]
			key2.setAttribute('style', 'background:orange')
			if (key.id == key2.id) {
				key.setAttribute('style', 'background:orange;height:'+newMin+'px')
			}
		}
	
	} else {
		for (var i = 0; i < whitekeys.length; i++) {
			key3 = whitekeys[i]
			key3.setAttribute('style', 'background:white')
			if (key.id == key3.id) {
				key3.setAttribute('style', 'background:white;height:'+newMin+'px')
			}
		}
	}
}

setInterval(update, 60000)

