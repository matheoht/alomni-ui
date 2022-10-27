# Alomni-UI

A simple react component library

## Table of Contents

- [Alomni-UI](#alomni-ui)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)

## Installation

To install Alomni-UI you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com) :

```
$ npm i alomni-ui
$ yarn add alomni-ui
```

## Usage

Import Alomni-UI style manually in `index.js`:

```js
import "alomni-ui/dist/alomni-ui.css";
```

To overwrite the default style/colors of Alomni-UI [follow this guide.](https://github.com/matheoht/alomni-ui/blob/main/OVERWRITE_CSS_GUIDE.md) 


Example of Alomni-UI usage:

```jsx
import { useState } from "react";
import { Button, Text } from "alomni-ui";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ margin: "50px" }}>
      <Button width="full" onClick={() => {setCounter(counter + 1);}}>Click me !</Button>
      <Text size="l" color="blue" style={{ textAlign: "center" }}>{counter}</Text>
    </div>
  );
}
```

## Documentation

Alomni-UI use [Storybook](https://storybook.js.org/) as the main documentation, which describes the library and gives examples of its usage.

To run the Storybook you have to clone the github repository of [Alomni-UI](https://github.com/matheoht/alomni-ui) and execute the command `npm run storybook`.
