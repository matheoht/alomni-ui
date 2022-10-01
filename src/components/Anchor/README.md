# Anchor

The Anchor component is used to display `<a>` HTML tag.

## Import component

```jsx
import { Anchor } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <Anchor size="l" color="blue" style={{ padding: "8px" }}>
        Lorem ipsum dolor sit amet.
      </Anchor>
    </>
  );
}
```

### Size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value is set to `md`

```jsx
  <Anchor size="s">Anchor size</Anchor>
  <Anchor size="md">Anchor size</Anchor>
  <Anchor size="l">Anchor size</Anchor>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those six values `red` `orange` `blue` `green` `purple` `gray` the default value is `blue`.

```jsx
<div style={{ display: "flex", gap: "10px" }}>
  <Anchor color="red">Alomni-ui palette red</Anchor>
  <Anchor color="orange">Alomni-ui palette orange</Anchor>
  <Anchor color="blue">Alomni-ui palette blue</Anchor>
  <Anchor color="green">Alomni-ui palette green</Anchor>
  <Anchor color="purple">Alomni-ui palette purple</Anchor>
  <Anchor color="gray">Alomni-ui palette gray</Anchor>
</div>
```

A custom color can be defined by the property `"style"` :

```jsx
<Anchor style={{ color: "#00FF00" }}>Custom color</Anchor>
<Anchor style={{ color: "rgb(0, 0, 255)" }}>Custom color</Anchor>
<Anchor style={{ color: "hsl(200, 100%, 75%)" }}>Custom color</Anchor>
```

### Weight

The `"weight"` property as to be one of those three values `light` `regular` `bold` if no argument is provided the default value will be set to `regular`

```jsx
  <Anchor weight="light">Anchor weight</Anchor>
  <Anchor weight="regular">Anchor weight</Anchor>
  <Anchor weight="bold">Anchor weight</Anchor>
```

### Style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
<Anchor style={{ backgroundColor: "#00FF00" }}>Custom style</Anchor>
<Anchor style={{ fontSize: "40px" }}>Custom style</Anchor>
<Anchor style={{ padding: "20px" }}>Custom style</Anchor>
```

### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Anchor
        onClick={() => {
          setCount(count + 1);
        }}
      >
        onClick increment
      </Anchor>
      <p>{count}</p>
    </>
  );
}
```