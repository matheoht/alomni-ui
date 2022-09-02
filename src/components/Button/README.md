# Button

The Button component is used to display buttons.

## Import component

```jsx
import { Button } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <Button type="solid" size="md" color="purple">Lorem ipsum.</Button>
    </>
  );
}
```

### Type

The `"type"` property as to be one of those two values `solid` `outline` if no argument is provided the default value is set to `solid`

```jsx
  <Button type="solid">Solid button</Button>
  <Button type="outline">Outline button</Button>
```

### Size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value is set to `md`

```jsx
  <Button size="s">Small size</Button>  
  <Button size="md">Medium size</Button>
  <Button size="l">Large size</Button>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those six values `red` `orange` `blue` `green` `purple` `gray` `black` the default value is `blue`.

```jsx
  <div style={{display: "flex" , gap: "10px"}}>
    <Button color="red">Color red</Button>
    <Button color="orange">Color orange</Button>
    <Button color="blue">Color blue</Button>
    <Button color="green">Color green</Button>
    <Button color="purple">Color purple</Button>
    <Button color="gray">Color gray</Button>
    <Button color="black">Color black</Button>
  </div>
```

A custom color can be defined by the property `"style"` :

```jsx
  <Button style={{backgroundColor: "#e7e4f5", color: "#5b39e1"}}>Custom color</Button>
```

### Radius

The `"radius"` property as to be one of those three values `sharp` `default` `rounded` if no argument is provided the default value is set to `default`

```jsx
  <Button radius="sharp">Sharp radius</Button>
  <Button radius="default">Default radius</Button>
  <Button radius="rounded">Rounded radius</Button>
```

### Width

The `"width"` property as to be one of those two values `default` `full` if no argument is provided the default value is set to `default`

```jsx
  <Button width="default">Default width</Button>
  <Button width="full">Full width</Button>
```

### Disabled

The `"disabled"` property as to take a boolean as argument `true` or `false` the default value is set to `false`

```jsx
  <Button disabled={true}>Disabled button</Button>
```

### Style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
  <Button style={{color: "blue", backgroundColor: "beige", borderRadius: "7px", padding: "25px"}}>Custom style</Button>
```


### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
  function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => {setCount(count + 1)}}>onClick increment</Button>
      <p>{count}</p>
    </>
  );
}
```
