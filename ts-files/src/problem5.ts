//Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty = <X ,Y extends keyof X>(obj:X, key:Y):X[Y] => {
    return obj[key]
}

const person = { name: "Jhankar", age: 30 };
console.log(getProperty(person, "name"));