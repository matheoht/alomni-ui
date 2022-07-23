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
    <div>
      <Heading type="h3" size="2rem" color="#5A758F">
        Lorem ipsum dolor sit amet.
      </Heading>
    </div>
  );
}
```

### Heading Type

The `"type"` argument as to be one of those six values `h1` `h2` `h3` `h4` `h5` `h6` if no argument is provided or wrongly spelled the default value will be `h1`

```jsx
  <Heading type="h1">Lorem ipsum dolor sit amet.</Heading>
  <Heading type="h2">Lorem ipsum dolor sit amet.</Heading>
  <Heading type="h3">Lorem ipsum dolor sit amet.</Heading>
  <Heading type="h4">Lorem ipsum dolor sit amet.</Heading>
  <Heading type="h5">Lorem ipsum dolor sit amet.</Heading>
  <Heading type="h6">Lorem ipsum dolor sit amet.</Heading>
```

### Heading Size

The `"size"` argument can be any CSS value, as the value is directly interpreted as CSS

```jsx
  <Heading size="16px">Lorem ipsum dolor sit amet.</Heading>
  <Heading size="2rem">Lorem ipsum dolor sit amet.</Heading>
  <Heading size="3em">Lorem ipsum dolor sit amet.</Heading>
```

### Heading Color

The `"color"` argument like the size argument can be any CSS value, as the value is directly interpreted as CSS

```jsx
  <Heading color="#00FF00">Lorem ipsum dolor sit amet.</Heading>
  <Heading color="rgb(0, 0, 255)">Lorem ipsum dolor sit amet.</Heading>
  <Heading color="hsl(120, 100%, 75%)">Lorem ipsum dolor sit amet.</Heading>
```
