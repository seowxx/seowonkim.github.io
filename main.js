
// $( document ).ready(function() {

// 	var Spectrum = WaveSurfer.create({
// 		container: '#waveform',
// 		progressColor: "white",
// 		barWidth: 4,
// 		waveColor: "rgba(255,255,255,0.3)"
// 	});

// 	Spectrum.load('whitenoise/1_birds.mp3');

// 	var buttons = {
// 		play: document.getElementById("btn-play"),
// 		pause: document.getElementById("btn-pause"),
// 		stop: document.getElementById("btn-stop")
// 	};

// 	$('#pp-btn').click(function(){
// 		$(this).toggleClass('play')
// 	})
// 	//play button once it's ready
// 	Spectrum.on('ready', function(){
// 		buttons.play.disabled = false;
// 	});

// 	//responsive mode
// 	window.addEventListener("resize", function(){
// 		//current progress according to the cursor position
// 		var currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();

// 		//reset graph
// 		Spectrum.empty();
// 		Spectrum.drawBuffer();
// 		// set original position
// 		Spectrum.seekTo(currentProgress);

// 		//enable/disable respectively buttons
// 		buttons.pause.disabled = true;
// 		buttons.play.disabled = false;
// 		buttons.stop.disabled = false;
// 	}, false);
// });

$(function() {
	var wavesurfer1 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer1.load('https://seowxx.github.io/13_dream/whitenoise/1_birds.mp3');


	var wavesurfer2 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer2.load('https://seowxx.github.io/13_dream/whitenoise/2_cafe.mp3');

	var wavesurfer3 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer3.load('https://seowxx.github.io/13_dream/whitenoise/3_firewood.mp3');

	var wavesurfer4 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer4.load('https://seowxx.github.io/13_dream/whitenoise/4_rain.mp3');

	var wavesurfer5 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer5.load('https://seowxx.github.io/13_dream/whitenoise/5_cricket.mp3');

	var wavesurfer6 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer6.load('https://seowxx.github.io/13_dream/whitenoise/6_children.mp3');

	var wavesurfer7 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer7.load('https://seowxx.github.io/13_dream/whitenoise/7_rain.mp3');

	var wavesurfer8 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer8.load('https://seowxx.github.io/13_dream/whitenoise/8_subway.mp3');

	var wavesurfer9 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer9.load('https://seowxx.github.io/13_dream/whitenoise/9_wave.mp3');	

	var wavesurfer10 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer10.load('https://seowxx.github.io/13_dream/whitenoise/10_heavyrain.mp3');

	var wavesurfer11 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer11.load('https://seowxx.github.io/13_dream/whitenoise/11_papercutting.mp3');	

	var wavesurfer12 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer12.load('https://seowxx.github.io/13_dream/whitenoise/12_bonfire.mp3');	

	var wavesurfer13 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer13.load('https://seowxx.github.io/13_dream/whitenoise/13_sizzle.mp3');

	var wavesurfer14 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer14.load('https://seowxx.github.io/13_dream/whitenoise/14_hairdryer.mp3');	

	var wavesurfer15 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer15.load('https://seowxx.github.io/13_dream/whitenoise/15_birds.mp3');	

	var wavesurfer16 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer16.load('https://seowxx.github.io/13_dream/whitenoise/16_plasticbag.mp3');	

	var wavesurfer17 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer17.load('https://seowxx.github.io/13_dream/whitenoise/17_pageflip.mp3');	

	var wavesurfer18 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer18.load('https://seowxx.github.io/13_dream/whitenoise/18_washingmachine.mp3');	

	var wavesurfer19 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer19.load('https://seowxx.github.io/13_dream/whitenoise/19_cricketInRain.mp3');	

	var wavesurfer20 = WaveSurfer.create({
		container: '#waveform-1',
		progressColor: "white",
		barWidth: 4,
		waveColor: "rgba(255,255,255,0.3)"
	});

	wavesurfer20.load('https://seowxx.github.io/13_dream/whitenoise/20_stream.mp3');	

	var btn1 = $("#pp-btn-1");
		btn1.click(function() {
		btn1.toggleClass("paused");
		wavesurfer1.playPause();
		return false;
	});

	var btn2 = $("#pp-btn-2");
		btn2.click(function() {
		btn2.toggleClass("paused");
		wavesurfer2.playPause();
		return false;
	});

	var btn3 = $("#pp-btn-3");
		btn3.click(function() {
		btn3.toggleClass("paused");
		wavesurfer3.playPause();
		return false;
	});

	var btn4 = $("#pp-btn-4");
		btn4.click(function() {
		btn4.toggleClass("paused");
		wavesurfer4.playPause();
		return false;
	});

	var btn5 = $("#pp-btn-5");
		btn5.click(function() {
		btn5.toggleClass("paused");
		wavesurfer5.playPause();
		return false;
	});

	var btn6 = $("#pp-btn-6");
		btn6.click(function() {
		btn6.toggleClass("paused");
		wavesurfer6.playPause();
		return false;
	});

	var btn7 = $("#pp-btn-7");
		btn7.click(function() {
		btn7.toggleClass("paused");
		wavesurfer7.playPause();
		return false;
	});

	var btn8 = $("#pp-btn-8");
		btn8.click(function() {
		btn8.toggleClass("paused");
		wavesurfer8.playPause();
		return false;
	});

	var btn9 = $("#pp-btn-9");
		btn9.click(function() {
		btn9.toggleClass("paused");
		wavesurfer9.playPause();
		return false;
	});

	var btn10 = $("#pp-btn-10");
		btn10.click(function() {
		btn10.toggleClass("paused");
		wavesurfer10.playPause();
		return false;
	});

	var btn11 = $("#pp-btn-11");
		btn11.click(function() {
		btn11.toggleClass("paused");
		wavesurfer11.playPause();
		return false;
	});

	var btn12 = $("#pp-btn-12");
		btn12.click(function() {
		btn12.toggleClass("paused");
		wavesurfer12.playPause();
		return false;
	});

	var btn13 = $("#pp-btn-13");
		btn13.click(function() {
		btn13.toggleClass("paused");
		wavesurfer13.playPause();
		return false;
	});

	var btn14 = $("#pp-btn-14");
		btn14.click(function() {
		btn14.toggleClass("paused");
		wavesurfer14.playPause();
		return false;
	});

	var btn15 = $("#pp-btn-15");
		btn15.click(function() {
		btn15.toggleClass("paused");
		wavesurfer15.playPause();
		return false;
	});

	var btn16 = $("#pp-btn-16");
		btn16.click(function() {
		btn16.toggleClass("paused");
		wavesurfer16.playPause();
		return false;
	});

	var btn17 = $("#pp-btn-17");
		btn17.click(function() {
		btn17.toggleClass("paused");
		wavesurfer17.playPause();
		return false;
	});

	var btn18 = $("#pp-btn-18");
		btn18.click(function() {
		btn18.toggleClass("paused");
		wavesurfer15.playPause();
		return false;
	});

	var btn19 = $("#pp-btn-19");
		btn19.click(function() {
		btn19.toggleClass("paused");
		wavesurfer19.playPause();
		return false;
	});

	var btn20 = $("#pp-btn-20");
		btn20.click(function() {
		btn20.toggleClass("paused");
		wavesurfer20.playPause();
		return false;
	});


});