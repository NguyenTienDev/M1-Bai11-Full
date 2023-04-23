var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");

		context.fillStyle = "#ff0000";
		context.beginPath();
		context.moveTo(100, 30);
		context.lineTo(140, 80);
		context.lineTo(100, 130);
		context.lineTo(60, 80);
		context.closePath();
		context.fill();