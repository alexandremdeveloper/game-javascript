function Sprite(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(bgImg, this.x, this.y, this.altura, this.largura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite (0, 0, 600, 600),
// bgPersonagem = new Sprite (0, 0, 50, 50);
// var personagem = new Sprite (0, 0, 10, 10)  //definindo tamanhado do background (inicial, final)
//definindo tam do objeto

spriteBoneco = new Sprite (618, 16, 87, 87);