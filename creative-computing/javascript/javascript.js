var animals = [
	"cat",
	"dog",
	"pig",
	"toucan"
	"turkey"
	"fish"
]

for (var i=0; i<animals.length;i=i+1) {
	var animal = animals[i];
	console.log ("<img src='" + animal + “.jpg’ />)
}

var greeting = "Hello World"

if (greeting.includes ("world")) {
		console.log(1)
} else {
	console.log(2)
}


var now = new Date()
var seconds = now.getSeconds()



if (seconds < 20) {
		console.log(1)
} else if(seconds <40) {
		console.log(2)
} else {
	console.log(3)
} else {
	console.log(4)
}


console.log (seconds)
	if (seconds < 10 || seconds > 50) {
		console.log(1)
	} else {
		console.log(2)
	}
