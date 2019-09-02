//variável do jogo
var canvas, ctx, altura, largura, frames = 0, maxPulos = 3,

chao = {
    y: 550,
    altura: 50,
    cor: "#e8da78",

    desenha: function (){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, largura, this.altura);
    }
},

bloco = {
    x: 50,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "#ff9239",
    gravidade: 1.6,
    velocidade: 0,
    forcaDoPulo: 23.6,
    qntPulos: 0,

    atualiza: function () {
        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if (this.y > chao.y - this.altura) {
            this.y = chao.y - this.altura
            this.qntPulos = 0;
        }
    },

    pula: function () {
        if (this.qntPulos< maxPulos) {
            this.velocidade = - this.forcaDoPulo;
            this.qntPulos++;
        }
    }, 

    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    } 
},

obstaculos = {
    _obs: [],
    _cor: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
    timerInsere: 0,

    insere: function () {
        this._obs.push({
            x: largura,
            altura: 30 + Math.floor(21 * Math.random()),
            largura: 30 + Math.floor(120 * Math.random()),
            cor: this._cor[Math.floor(5 * Math.random())]
        });
        this.timerInsere = 30 + Math.floor(10 * Math.random());     
    },

    atualiza: function () {

    }, 

    desenha: function () {
        for (var i = 0, tam = this._obs.length;i < tam; i++) {
            var obs = this._obs[i];
            ctx.fillStyle = obs.cor;
            ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura);
        }
    }
};


function clique (event) {
    bloco.pula();
}


function main () {
    altura = window.innerHeight;
    largura = window.innerWidth;

    if (largura >=500) {
        largura = 600;
        altura = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = largura;
    canvas.height = altura;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    document.addEventListener("mousedown", clique);

    roda();
}

function roda () {
    atualiza ();
    desenha ();

    window.requestAnimationFrame(roda);
}

function atualiza () {
    frames++;

    bloco.atualiza(); 
}

function desenha () {
    ctx.fillStyle = "#80daff";
    ctx.fillRect(0, 0, largura, altura);

    chao.desenha();
    obstaculos.desenha();
    bloco.desenha();
    
}



//inicializa o jogo
main ();