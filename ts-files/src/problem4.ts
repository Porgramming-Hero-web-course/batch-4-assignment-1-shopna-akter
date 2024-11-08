// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: 'circle',
    radius: number
}
type Rectangle = {
    shape: 'rectengle',
    width: number,
    height: number
}

type Shape = Circle | Rectangle

function calculateShapeArea(Shape: Shape): number {
    if (Shape.shape === 'circle') {
        return Math.PI * Shape.radius * Shape.radius
    }
    else {
        return Shape.width * Shape.height
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectengle",
    width: 4,
    height: 6,
});
console.log(circleArea);