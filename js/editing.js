var editor = function () {
	var base = this;


	function setControls() {

	}

	function selectText(element){ //currently only supports ids of elements
		var text = document.getElementById(element);
		if(document.body.createTextRange) { //Edge
			var range = document.body.createTextRange();
			range.moveToElementText(text);
			range.select();
		} else if(window.getSelection) {
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(text);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}

	base.initiateCopy = function() {
		
		selectText("editor");
		try {
			document.execCommand('copy');
		}
		catch (e) {
			console.log(e);
		}	
		console.log("execCommand(COPY) was successfully executed");		
	}

	function eventsListener(){
		$("#copy").click(function(){
			// alert("click handler called ");
			base.initiateCopy();
		});
	}

	base.initialize = function() {
		setControls();
		eventsListener();
	}

}
