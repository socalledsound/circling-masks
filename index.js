const clipPathTarget1 = document.body.querySelector('#svgPath1');
const clipPathTarget2 = document.body.querySelector('#svgPath2');
const clipPathTarget3 = document.body.querySelector('#svgPath3');
const circles1 = Array.from({length:100});
const circles2 = Array.from({length:100});
const circles3 = Array.from({length:200});

circles1.forEach((circle, i) => {
    circles1[i] = 
    {
        target: clipPathTarget1,
        pathItem: makeCircleMask(),
        x: Math.random()*1500,
        y: Math.random()*1000,
        maxRadius: Math.random()* 50,
        stroke: 'red',
        strokeWidth: 6,
        fill: 'none',
        xMult: Math.random() * 100 + 600,
        yMult: Math.random()* 200 + 100,
        xOff: Math.random() * 1000 + 500,
        yOff: Math.random()* 100 + 300,
        thetaInc: Math.random()/1000 - Math.random()/100
    }
})

circles2.forEach((circle, i) => {
    circles2[i] = 
    {
        target: clipPathTarget2,
        pathItem: makeCircleMask(),
        x: Math.random()*1500,
        y: Math.random()*1000,
        maxRadius: Math.random()* 50,
        stroke: 'red',
        strokeWidth: 6,
        fill: 'none',
        xMult: Math.random() * 100 + 600,
        yMult: Math.random() * 200 + 100,
        xOff: Math.random() * 1000 + 500,
        yOff: Math.random()* 100 + 300,
        thetaInc: Math.random()/1000 + Math.random()/100
    }
})

circles3.forEach((circle, i) => {
    circles3[i] = 
    {
        target: clipPathTarget3,
        pathItem: makeCircleMask(),
        x: Math.random()*1500,
        y: Math.random()*1000,
        maxRadius: Math.random()* 50,
        stroke: 'red',
        strokeWidth: 6,
        fill: 'none',
        xMult: Math.random() * 100 + 600,
        yMult: Math.random()*20 + 100,
        xOff: Math.random() * 1000 + 500,
        yOff: Math.random()* 100 + 400,
        thetaInc: Math.random()/1000 + Math.random()/100
    }
})

console.log(circles1);
circles1.forEach((circle, i) => new CirclingMask(circle));
circles2.forEach((circle, i) => new CirclingMask(circle));
circles3.forEach((circle, i) => new CirclingMask(circle));

function makeCircleMask(){
    return document.createElementNS("http://www.w3.org/2000/svg", "circle");   
}





// let {x, y, maxRadius, stroke, strokeWidth, fill} = options;



// svg.appendChild(containingCircle);

// containingCircle.setAttribute('cx', `${x}`);
// containingCircle.setAttribute('cy', `${y}`);
// containingCircle.setAttribute('r', `${maxRadius}`);
// containingCircle.setAttribute('stroke', `${stroke}`);
// containingCircle.setAttribute('stroke-width', `${strokeWidth}`);
// containingCircle.setAttribute('fill',  `${fill}`);
// containingCircle.addEventListener('click', () => console.log('hi'));



