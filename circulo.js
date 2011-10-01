function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
}

Circulo.prototype.actualizar = function()
{ 
    for (var this.x =0; x >= this.juego.ctx.canvas.width -48; ++x) 
	for (var this.x =this.juego.ctx.canvas.width -48; x <= 0; --x)
   /* if 	(this.x < this.juego.ctx.canvas.width -48) {
        this.x += 2;
    }
    else {
        this.x = 0;*/
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};