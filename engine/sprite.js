function Sprite(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas) {
        ctx.drawImage(bgImg, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite (35, 25, 600, 600),

spriteBoneco = new Sprite (653, 44, 64, 63);

perdeu = new Sprite (603, 478, 397, 358),
jogar = new Sprite (944, 126, 304, 276),
novo = new Sprite (68, 721, 287, 93),
spriteRecord = new Sprite (28, 879, 441, 95),
spriteChao = new Sprite (0, 850, 629, 620);

