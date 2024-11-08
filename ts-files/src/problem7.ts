//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number,) {
        this.make = make
        this.model = model
        this.year = year
    }
    getCarAge(){
        const carAge = 2024 - this.year
        return carAge
    }
}

const car = new Car("Honda", "Civic",2016);
console.log(car.getCarAge()) 