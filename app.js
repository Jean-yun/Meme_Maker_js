const canvas = document.querySelector("canvas");
//this is like the paint brush
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

//1. canvas coordinates starts from the top left corner
// ctx.rect(30, 30, 100, 100)
// ctx.rect(150, 150, 100, 100)
// ctx.fill()

// ctx.beginPath()
// ctx.rect(500, 500, 100, 100)
// ctx.stroke()

// setTimeout(() => {
// 	ctx.fillStyle = "red"
// 	ctx.fill()
// }, 1000);


//2. move painting brush
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 300);
// ctx.lineTo(50, 300);
// ctx.lineTo(50,50)

// ctx.fill()


//3. Drawing house
// ctx.fillRect(200, 400, 10, 300);
// ctx.fillRect(600, 400, 10, 300);
// ctx.lineWidth = 5;
// ctx.strokeRect(360, 500, 100, 200);
// ctx.fillRect(200, 400, 400, 10);
// ctx.fillRect(200, 700, 410, 10);

// ctx.moveTo(202, 400);
// ctx.lineTo(410, 200);
// ctx.lineTo(610, 400);
// ctx.fill()


//4. Drawing Face
ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(400, 200, 15, 100);
ctx.fillRect(260, 200, 100, 200);
ctx.arc(310, 150, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(290, 140, 10, Math.PI, 2 * Math.PI);
ctx.arc(330, 140, 10, Math.PI, 2 * Math.PI);
ctx.fill();

