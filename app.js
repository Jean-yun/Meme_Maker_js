const canvas = document.querySelector("canvas");
//this is like the paint brush
const ctx = canvas.getContext("2d")
const lineWidth = document.getElementById("line-width")
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
	if (isPainting) {
		ctx.lineTo(event.offsetX, event.offsetY);
		ctx.stroke();
		//kill the function by return
		return 
	}
	ctx.beginPath();
	ctx.moveTo(event.offsetX, event.offsetY)
}

function onMouseDown(event) {
	isPainting = true;
}

function cancelPainting() {
	isPainting = false;
}

function onLineWidthChange(event) {
	ctx.lineWidth = event.target.value;
	
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseup", cancelPainting)
//bug solving
canvas.addEventListener("mouseleave", cancelPainting)

//lineWidth change tracker
lineWidth.addEventListener("change", onLineWidthChange)