/**
 * Demands that the input variable be a specific type, and returns that input unmodified.
 * 
 * ## Example
 * ```typescript
let shouldBeANumber: any;                 // Someone failed to add a type here
shouldBeANumber = demand<number>("test"); // But thanks to demand, TypeScript (and our IDE) can still recognise a problem and will warn us
```
 * 
 * @see - [ts-demand documentation](https://github.com/JoshuaWalsh/ts-demand/)
 */
export const demand = <T>(input: T) => input;