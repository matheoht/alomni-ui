# Tag

The Tag component is used to display tags.

## Import component

```jsx
import { Tag } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <Tag size="md" color="blue" radius="default">Lorem ipsum.</Tag>
    </>
  );
}
```

### Size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value is set to `md`

```jsx
  <Tag size="s">Size small</Tag>  
  <Tag size="md">Size medium</Tag>
  <Tag size="l">Size large</Tag>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those six values `red` `orange` `blue` `green` `purple` `gray` the default value is `blue`.

```jsx
  <div style={{display: "flex" , gap: "10px"}}>
    <Tag color="red">Color red</Tag>
    <Tag color="orange">Color orange</Tag>
    <Tag color="blue">Color blue</Tag>
    <Tag color="green">Color green</Tag>
    <Tag color="purple">Color purple</Tag>
    <Tag color="gray">Color gray</Tag>
  </div>
```

A custom color can be defined by the property `"style"` :

```jsx
  <Tag style={{backgroundColor: "#e7e4f5", color: "#5b39e1"}}>Tag custom color</Tag>
```

### Radius

The `"radius"` property as to be one of those three values `sharp` `default` `rounded` if no argument is provided the default value is set to `default`

```jsx
  <Tag radius="sharp">Radius sharp</Tag>
  <Tag radius="default">Radius default</Tag>
  <Tag radius="rounded">Radius rounded</Tag>
```

### style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
  <Tag style={{color: "blue", backgroundColor: "cyan", borderRadius: "7px", padding: "25px"}}>Custom style</Tag>
```


### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
  function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tag onClick={() => {setCount(count + 1)}}>onClick increment</Tag>
      <p>{count}</p>
    </>
  );
}
```
