var rect = require('./rectangle')

function solveRectangle(l,b){
    console.log("Solving for length = "+l+" breadth = "+b);
    if(l<=0 || b<=0){
        console.log("Cannot calculate area for length or breadth less than zero");

    }
    else{
        console.log("Area = "+rect.area(l,b));
        console.log("Perimeter = "+rect.perimeter(l,b));
    }
}

solveRectangle(4,3);
solveRectangle(-1,5);