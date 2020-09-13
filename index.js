var rect = require('./rectangle')

function solveRectangle(l,b){
    console.log("Solving for length = "+l+" breadth = "+b);
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("ERROR : "+err.message);
        }
        else{
            console.log("Area of Rectangle having l = "+l+" & b = "+b +" = "+rectangle.area(l,b));
            console.log("Perimeter of Rectangle having l = "+l+" & b = "+b +" = "+rectangle.perimeter(l,b));
        }
    })
    console.log("After Solving Length & Breadth");
    
}

solveRectangle(4,3);
solveRectangle(-1,5);
solveRectangle(0,5)