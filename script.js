startRotation();

function startRotation() {

	if (is_touch_device()) {
		document.getElementById("instructions").innerHTML = "SWIPE TO ROTATE";
	}
	else {
		document.getElementById("instructions").innerHTML = "USE MOUSE TO DRAG AND ROTATE";
	}

	var rotateElement = document.getElementById('rotate-this');
	new Propeller(rotateElement , {
		inertia: 0.99, speed: 10,
	});

}

/* Function to check whether the device supports touch input or not */
function is_touch_device() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function (query) {
		return window.matchMedia(query).matches;
	}

	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}
	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}