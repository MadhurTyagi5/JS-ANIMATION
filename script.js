window.onload = function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

       const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    
}

const mouse = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
});



class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    #count;
    #radius;
    constructor(ctx, width, height, gradient) {
        this.#ctx = ctx;
        this.#ctx.lineWidth = 0.3;
        this.#width = width;
        this.#height = height;
        this.gradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.#radius = 1.9;
        this.vr = 0.03;       
        this.timer = 0;
        this.cellSize = 10;
        this.interval = 1000/60;
        this.timer = 0;
        this.lastTime = 0;
    }
    #createGradient(){
        this.gradient = this.#ctx.createLinearGradient(0, 0,this.#width, this.#height);
        this.gradient.addColorStop("0.1","#ff5c33");
        this.gradient.addColorStop("0.2", "#ff66b3");
        this.gradient.addColorStop("0.4", "#ccccff");
        this.gradient.addColorStop("0.6", "#b3ffff");
        this.gradient.addColorStop("0.8", "#80ff80");
        this.gradient.addColorStop("0.9", "#ffff33");
    }


}