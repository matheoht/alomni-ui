# Text

The Text layout component is used to describe a paragraph.

## Import component

```jsx
import { Text } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <Text size="l" color="blue" style={{ padding: "8px" }}>
        Lorem ipsum dolor sit amet.
      </Text>
    </>
  );
}
```

### size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value will be set to `md`

```jsx
  <Text size="s">Text size</Text>
  <Text size="md">Text size</Text>
  <Text size="l">Text size</Text>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those six values `red` `orange` `blue` `green` `purple` `gray`

```jsx
  <Text color="red">Alomni-ui palette red</Text>
  <Text color="orange">Alomni-ui palette orange</Text>
  <Text color="blue">Alomni-ui palette blue</Text>
  <Text color="green">Alomni-ui palette green</Text>
  <Text color="purple">Alomni-ui palette purple</Text>
  <Text color="gray">Alomni-ui palette gray</Text>
```
A custom color can be defined by the property `"style"` :

```jsx
  <Text style={{ color: "#00FF00" }}>Custom color</Text>
  <Text style={{ color: "rgb(0, 0, 255)" }}>Custom color</Text>
  <Text style={{ color: "hsl(200, 100%, 75%)" }}>Custom color</Text>
```
### weight

The `"weight"` property as to be one of those three values `light` `regular` `bold` if no argument is provided the default value will be set to `regular`

```jsx
  <Text weight="light">Text weight</Text>
  <Text weight="regular">Text weight</Text>
  <Text weight="bold">Text weight</Text>
```

### italic

The `"italic"` property can be set to to `true` or `false` by default it is set to `false`

```jsx
  <Text italic={true}>Text italic</Text>
```

### style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
  <Text style={{ backgroundColor: "#00FF00" }}>Custom style</Text>
  <Text style={{ fontSize: "40px" }}>Custom style</Text>
  <Text style={{ padding: "20px" }}>Custom style</Text>
```


### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
  function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text onClick={() => {setCount(count + 1);}}>onClick increment</Text>
      <p>{count}</p>
    </>
  );
}
```