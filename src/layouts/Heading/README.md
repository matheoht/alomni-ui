# Heading

The Heading layout component is used to describe a section.

## Import component

```jsx
import { Heading } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <Heading type="h3" color="blue" style={{ padding: "8px" }}>
        Lorem ipsum dolor sit amet.
      </Heading>
    </>
  );
}
```

### type

The `"type"` property as to be one of those six values `h1` `h2` `h3` `h4` `h5` `h6` if no argument is provided the default value will be set to `h1`

```jsx
  <Heading type="h1">Heading h1</Heading>
  <Heading type="h2">Heading h2</Heading>
  <Heading type="h3">Heading h3</Heading>
  <Heading type="h4">Heading h4</Heading>
  <Heading type="h5">Heading h5</Heading>
  <Heading type="h6">Heading h6</Heading>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those six values `red` `orange` `blue` `green` `purple` `gray`

```jsx
  <Heading color="red">Alomni-ui palette red</Heading>
  <Heading color="orange">Alomni-ui palette orange </Heading>
  <Heading color="blue">Alomni-ui palette blue</Heading>
  <Heading color="green">Alomni-ui palette green</Heading>
  <Heading color="purple">Alomni-ui palette purple</Heading>
  <Heading color="gray">Alomni-ui palette gray</Heading>
```

A custom color can be defined by the property `"style"` :

```jsx
  <Heading style={{ color: "#00FF00" }}>Custom color</Heading>
  <Heading style={{ color: "rgb(0, 0, 255)" }}>Custom color</Heading>
  <Heading style={{ color: "hsl(120, 100%, 75%)" }}>Custom color</Heading>
```

### style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
  <Heading style={{ backgroundColor: "#00FF00" }}>Custom style</Heading>
  <Heading style={{ fontSize: "40px" }}>Custom style</Heading>
  <Heading style={{ padding: "20px" }}>Custom style</Heading>
```


### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
  function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading onClick={() => {setCount(count + 1);}}>onClick increment</Heading>
      <p>{count}</p>
    </>
  );
}
```
