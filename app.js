const canvas = document.querySelector("canvas");
//this is like the paint brush
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraseBtn = document.getElementById("eraser-btn")
const fileInput = document.getElementById("file")
const textInput = document.getElementById("text")
const saveBtn = document.getElementById("save")

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = color.value;
//line corner style
ctx.lineCap = "round"

let isPainting = false;
let isFilling = false;

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

function onColorChange(event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}


function onColorClick(event) {
	const newColor = event.target.dataset.color;
	ctx.strokeStyle = newColor;
	ctx.fillStyle = newColor;
	color.value = newColor;
}

function onModeClick(event) {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = "Fill"
	} else {
		isFilling = true;
		modeBtn.innerText = "Draw"
	}
}

//Filling the entrie canvas 
function onCanvasClick() {
	if (isFilling) {
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)}
}

//Added alert (confirm) to recheck destroy
function onDestroyClick() {
	if (confirm("Are you sure you want to Destroy all the work?")) {
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}		
}

function onEraserClick() {
	ctx.strokeStyle = "white";
	isFilling = false;
	modeBtn.innerText = "Fill"
}

function onFileChange(event) {
	//Calling image as URL
	const file = event.target.files[0];
	const url = URL.createObjectURL(file);
	console.log(url);
	//showing image 
	const image = new Image();
	image.src = url;
	image.onload = function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
	};
	fileInput.value = null;
}

//text stamp (save, restore)
function onDoubleClick(event) {
	const text = textInput.value;
	//save previous value and revert back (save function)
	//saves current color, style, everything (svae & restore)
	if (text !== "") {
	ctx.save();
	ctx.lineWidth = 1;
	ctx.font = "70px serif"
	ctx.fillText(text, event.offsetX, event.offsetY)
	ctx.restore();
	}
}

function onSaveClick() {
	const url = canvas.toDataURL();
	//creating fake anchor element
	const a = document.createElement("a")
	a.href = url
	a.download = "myDrawing.png"
	a.click();
}

canvas.onmousemove = onMove
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseup", cancelPainting)
//bug solving
canvas.addEventListener("mouseleave", cancelPainting)

//Fill, draw mode
canvas.addEventListener("click", onCanvasClick)
//Text stamp when double clicked
canvas.addEventListener("dblclick", onDoubleClick)
//lineWidth change tracker
lineWidth.addEventListener("change", onLineWidthChange)
//color change tracker
color.addEventListener("change", onColorChange)


//colorOption change tracker
colorOptions.forEach(option => option.addEventListener("click", onColorClick));

//Mode change 
modeBtn.addEventListener("click", onModeClick)

//Destroy button
destroyBtn.addEventListener("click", onDestroyClick)

//Erase button
eraseBtn.addEventListener("click", onEraserClick)

//File input 
fileInput.addEventListener("change", onFileChange)

//Save Button
saveBtn.addEventListener("click", onSaveClick)