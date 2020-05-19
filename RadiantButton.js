class RadiantButton {
    constructor({svg, containingCircle, x, y, maxRadius, stroke, strokeWidth, fill}){
        this.svg = svg;
        this.containingCircle = containingCircle;
        this.x = x;
        this.y = y;
        this.maxRadius = maxRadius;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
        this.theta = 0.01
        this.xSpeed = Math.sin(this.theta)*20;
        this.xMult  =500; 
        this.yMult = 100;
        this.xOff = 600; 
        this.yOff = 200;
        this.init();
       
    }


    init(){

        
        this.containingCircle.setAttribute('class', `myRadiantButton`);
        this.containingCircle.setAttribute('id', `myRadiantButton`);
        this.svg.appendChild(this.containingCircle);
        this.containingCircle.addEventListener('click', this.log);

        this.render();
        this.animate();

    }

    log(){
        console.log("hi");
    }

    render(){
        this.containingCircle.setAttribute('cx', `${this.x}`);
        this.containingCircle.setAttribute('cy', `${this.y}`);
        this.containingCircle.setAttribute('r', `${this.maxRadius}`);
        this.containingCircle.setAttribute('stroke', `${this.stroke}`);
        this.containingCircle.setAttribute('stroke-width', `${this.strokeWidth}`);
        this.containingCircle.setAttribute('fill',  `${this.fill}`);
       
    }


    async animate(){
        // console.log(this.x, this.xSpeed);
        // this.x += this.xSpeed;
        this.theta+=0.01;
        let vector = this.calculateCircularPath(this.theta, this.xMult, this.yMult, this.xOff, this.yOff);
        console.log(vector);
        this.x = vector.x;
        this.y = vector.y;
        this.containingCircle.setAttribute('cx', `${this.x}`);
        this.containingCircle.setAttribute('cy', `${this.y}`);
        await this.waitFunc(10);
        console.log("hi");
        this.animate();


    }


    waitFunc(waitVal){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve();
            }, waitVal);
        })
    }




    calculateCircularPath(theta, xMult, yMult, xOff, yOff){
        const obj = {
            x: Math.sin(theta) * xMult + xOff,
            y: Math.cos(theta) * yMult + yOff
        }
        return obj;
    }


}



// const obj = {
//     x: 200,
//     y: 200,
//     r: 50,
//     stroke: 'black',
//     fill: 'none'
// }    

// function updateXY(x,y){

// }



//  
// console.log(circle);





// function logHi(){
//     console.log("hi");
// }
