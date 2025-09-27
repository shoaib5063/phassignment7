# assignment7

## What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that looks similar to HTML. It's used in React to describe what the UI should look like. JSX allows developers to write elements and components in a declarative and readable way. Under the hood, JSX compiles into `React.createElement` calls.

## What is the difference between State and Props?
- **Props** (properties) are read-only values passed from a parent component to a child. They are used to configure and feed data into components.
- **State** is internal to a component and can change over time (via `setState` or hooks like `useState`). Changes to state cause the component to re-render.

## What is the useState hook, and how does it work?
`useState` is a React hook that lets functional components have state. You call it like `const [value, setValue] = useState(initialValue)`. `value` is the current state, `setValue` updates it and triggers a re-render.

## How can you share state between components in React?
Common ways:
- Lift state up: store the state in a common parent and pass data and update callbacks down via props.
- Context API: create a React context to share data deeper in the tree without prop-drilling.
- State management libraries (Redux, Zustand, etc.) for more complex global state.

## How is event handling done in React?
Event handling uses camelCase props on elements (e.g., `onClick`, `onChange`). You pass a function reference (not a string). Example: `<button onClick={() => doSomething()}>Click</button>`. React normalizes events across browsers using its SyntheticEvent wrapper.
