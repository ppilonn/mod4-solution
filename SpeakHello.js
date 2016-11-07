(function(window) {
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (names) {
		console.log(speakWord + " " + names); //helloSpeaker.names
		}
	window.helloSpeaker = helloSpeaker;
})(window);

