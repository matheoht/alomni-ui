# ProgressBar

## Import component

```jsx
import { ProgressBar } from "alomni-ui";
```

## Usage

```jsx
function App() {
  return (
    <>
      <ProgressBar size="l" color="blue" value={72} maxvalue={100}>Lorem ipsum dolor sit amet.</ProgressBar>
    </>
  );
}
```

### Size

The `"size"` property as to be one of those three values `s` `md` `l` if no argument is provided the default value is set to `md`

```jsx
<ProgressBar size="s" value={2} maxvalue={10}>ProgressBar size</ProgressBar>
<ProgressBar size="md" value={42} maxvalue={100}>ProgressBar size</ProgressBar>
<ProgressBar size="l" value={53} maxvalue={100}>ProgressBar size</ProgressBar>
```

### color

The `"color"` property is build to use the native color palette of the library it as to be one of those seven values `red` `orange` `blue` `green` `purple` `gray` `black` the default value is `blue`.

```jsx
<ProgressBar color="red" value={10}>Alomni-ui palette red</ProgressBar>
<ProgressBar color="orange" value={15}>Alomni-ui palette orange</ProgressBar>
<ProgressBar color="blue" value={20}>Alomni-ui palette blue</ProgressBar>
<ProgressBar color="green" value={25}>Alomni-ui palette green</ProgressBar>
<ProgressBar color="purple" value={35}>Alomni-ui palette purple</ProgressBar>
<ProgressBar color="gray" value={40}>Alomni-ui palette gray</ProgressBar>
<ProgressBar color="black" value={45}>Alomni-ui palette black</ProgressBar>
```

A custom color can be defined by the property `"style"` :

```jsx
<ProgressBar style={{ backgroundColor: "#00FF00" }} value={50}>Custom color</ProgressBar>
<ProgressBar style={{ backgroundColor: "rgb(0, 0, 255)" }} value={55}>Custom color</ProgressBar>
<ProgressBar style={{ backgroundColor: "hsl(200, 100%, 75%)" }} value={60}>Custom color</ProgressBar>
```

### onClick

Any function can be passed inside [onClick](https://reactjs.org/docs/handling-events.html) property :

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProgressBar value={65}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        onClick increment
      </ProgressBar>
      <h3>{count}</h3>
    </>
  );
}
```