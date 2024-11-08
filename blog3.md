## Blog Topic:Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Type guard is a special feature of Typescript. By using type guards, you can prevent runtime errors, enhance code safety. Type guard help us to ensure type safety in a large project. Specially, most of the time we face error while accesing a property of a object(beacause it's unkown) and we got the error after long time.Type guard will protect us from those problem. 

## TypeScript Type Guard Example

```typescript
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

const animal: Cat | Dog = { meow: () => console.log("Meow!") };

if (isCat(animal)) {
  animal.meow();  // Safe: TypeScript knows it's a Cat
} else {
  console.log("This is a Dog.");
}
```
## some type of typeguards.

1.Literel type 
To check if a variable has a specific literal value
Usage: it help us to check against specific literel value

2.typeof type
to check if a variable is of a primitive type like string, number, boolean, or symbol
Usage: helps to check between primitive types

3.instanceof type
To check if an object is an instance of a specific class or constructor function.

Usage: it help us to check class instances

4.in type
it help to check a object property
Usage: checking if a property exist on project or not