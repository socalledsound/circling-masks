class CirclingMask {
    constructor({target,  pathItem, x, y, maxRadius, stroke, strokeWidth, fill, xMult, yMult, xOff, yOff, thetaInc}){
        this.target = target;
        this.circleMask =  pathItem;
        this.x = x;
        this.y = y;
        this.maxRadius = maxRadius;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
        this.fill = fill;
        this.theta = 0.01;
        this.thetaInc = thetaInc;
        this.xMult  = xMult; 
        this.yMult = yMult;
        this.xOff = xOff; 
        this.yOff = yOff;
        this.init();
       
    }


    init(){

        
        this.circleMask.setAttribute('class', `myRadiantButton`);
        this.circleMask.setAttribute('id', `myRadiantButton`);
        this.target.appendChild(this.circleMask);
        this.circleMask.addEventListener('click', this.log);

        this.render();
        this.animate();

    }

    log(){
        console.log("hi");
    }

    render(){
        this.circleMask.setAttribute('cx', `${this.x}`);
        this.circleMask.setAttribute('cy', `${this.y}`);
        this.circleMask.setAttribute('r', `${this.maxRadius}`);
        this.circleMask.setAttribute('stroke', `${this.stroke}`);
        this.circleMask.setAttribute('stroke-width', `${this.strokeWidth}`);
        this.circleMask.setAttribute('fill',  `${this.fill}`);
       
    }


    async animate(){
        // console.log(this.x, this.xSpeed);
        // this.x += this.xSpeed;
        this.theta += this.thetaInc;
        let vector = this.calculateCircularPath(this.theta, this.xMult, this.yMult, this.xOff, this.yOff);
        console.log(vector);
        this.x = vector.x;
        this.y = vector.y;
        this.circleMask.setAttribute('cx', `${this.x}`);
        this.circleMask.setAttribute('cy', `${this.y}`);
        this.circleMask.setAttribute('r', `${this.maxRadius * Math.sin(1.5/this.theta * this.theta/1.5)}`);
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
