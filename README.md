## What is this?

Sometimes you have to work with libraries that don't have typings, or have overly-permissive typings. This minimalist library allows you to request more specific/strict type checking.

E.g.
```typescript
// Let's say you have a variable that should really be a `number`, but some fool left it as `any`.
let shouldBeANumber: any;

// If you try to assign a non-number to it, TypeScript will allow you to (it doesn't know any better)
shouldBeANumber = "hello"; // Succeeds

// The traditional way to resolve this would be to assign your intended value to another variable, and then assign it to the target variable
const myValue: number = "hello"; // Now it fails
shouldBeANumber = myValue;

// But that's clunky and requires multiple statements, it can't be done inline. (Well, it can be done inline, but that would be even more disgusting)

// Instead, import ts-demand
import {demand} from 'ts-demand';

// And now when you want additional typechecking, you can demand it
shouldBeANumber = demand<number>("hello"); // Hooray, it fails!
```

## Is this a joke?

No. I gave a very simple example, but in the real world I come across similar issues a lot with complicated objects. In these situations, having typechecking is incredibly valuable for avoiding mistakes.

An example would be when specifying plugin configs in a gatsby-config file.

## Why do I need a library to achieve this?

Because Microsoft/TypeScript#7481 hasn't been implemented yet.

## Couldn't I achieve this by writing my own declaration file?

Usually yes, but that would take much more effort than using this helper does.

## I hate adding dependencies!

This dependency has no other dependencies, so hopefully that's acceptable. If you don't want to add even a single extra dependency, feel free to just copy the demand function from src/index.ts. It's a one-liner.