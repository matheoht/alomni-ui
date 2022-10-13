# Avatar

The Avatar component is used to display avatar images or letters.

## Import component

```jsx
import { Avatar } from "alomni-ui";
```

## Usage
Two modes of display are available `letter` and `image`.

`Letter` mode : Any string can be passed inside the argument "text" and the two first letters of the string will be displayed in uppercase.

`Image` mode : Two arguments are available "src" which specifies the path to the image and "alt" which specifies an alternate text for the image, if the image for some reason cannot be displayed.

```jsx
function App() {
  return (
    <>
      <Avatar size="md" color="blue" text="Alan" style={{ margin: "8px" }} />
      <Avatar size="l" src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="Dog picture" style={{ margin: "8px" }} />
    </>
  );
}
```

### Size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value is set to `md`

```jsx
  <Avatar size="s" text="small" />
  <Avatar size="md" text="medium" />
  <Avatar size="l" text="large" />
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those seven values `red` `orange` `blue` `green` `purple` `gray` `black` the default value is `blue`.

```jsx
  <div style={{display: "flex" , gap: "10px"}}>
    <Avatar color="red" text="red"/>
    <Avatar color="orange" text="orange"/>
    <Avatar color="blue" text="blue"/>
    <Avatar color="green" text="green"/>
    <Avatar color="purple" text="purple"/>
    <Avatar color="gray" text="gray"/>
    <Avatar color="black" text="black"/>
  </div>
```

A custom color can be defined by the property `"style"` :

```jsx
  <Avatar style={{backgroundColor: "#e7e4f5", color: "#5b39e1"}} text="Custom color" />
```

### Radius

The `"radius"` property as to be one of those three values `sharp` `default` `rounded` if no argument is provided the default value is set to `default`

```jsx
  <Avatar radius="sharp" text="sharp" />
  <Avatar radius="default" text="default" />
  <Avatar radius="rounded" text="rounded" />
```

### style

Any style can be given in the `"style"` property using the [react styling system](https://www.w3schools.com/react/react_css.asp) :

```jsx
  <Avatar style={{color: "blue", backgroundColor: "floralwhite", borderRadius: "7px", padding: "25px"}} text="Custom style" />
```


### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
  function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Avatar onClick={() => {setCount(count + 1)}} text="onClick" />
      <p>{count}</p>
    </>
  );
}
```
