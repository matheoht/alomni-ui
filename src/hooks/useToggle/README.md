# useToggle

useToggle hook is used to act as a switch by providing two arguments the `status` a boolean and `toggleStatus` a function that turns the status value into its inverse.

## Import component

```jsx
import { useToggle } from "alomni-ui";
```

## Usage

```jsx
function App() {
  const { status, toggleStatus } = useToggle();

  return (
    <div>
      <Button onClick={toggleStatus}>Button</Button>
      {status && <h3>Status activate</h3>}
    </div>
  );
}
```

## Options

To define the default behaviour a boolean can passed to `useToggle()`, by default it is set to `false`.

```jsx
const { status, toggleStatus } = useToggle(true);
```
