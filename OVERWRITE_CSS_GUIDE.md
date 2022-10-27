# Alomni-UI Overwrite CSS Guideline

## To overwrite the default style/colors of Alomni-UI follow this three step guide.

Step 1: Create a file called `"overwritecss.css"` 

```css
/* Overwrite font*/
*,::before,::after {
  font-family: "Roboto", sans-serif;
}

/* Overwrite color palette */
:root {
  --color-background: #f7f9fc;
  --color-white: #ffffff;
  --color-black: #1d2738;

  --color-primary-red: #ff5a39;
  --color-primary-orange: #ffba30;
  --color-primary-blue: #1890ff;
  --color-primary-green: #4dcb73;
  --color-primary-purple: #975fe4;
  --color-primary-gray: #707f94;

  --color-secondary-red: #feeceb;
  --color-secondary-orange: #fff4e5;
  --color-secondary-blue: #e8f4fd;
  --color-secondary-green: #edf7ed;
  --color-secondary-purple: #f1e0fd;
  --color-secondary-gray: #dce9f4;
}

/* Overwrite heading size */
h1 {font-size: 32px}
h2 {font-size: 28px}
h3 {font-size: 25px}
h4 {font-size: 22px}
h5 {font-size: 20px}
h6 {font-size: 18px}
```
Step 2: Edit the template as you need and copy it to `"overwritecss.css"` 

Step 3: Import `"overwritecss.css"` under the import of `"alomni-ui.css"` like follow:

```jsx
import "alomni-ui/src/styles/alomni-ui.css";
import "./overwrite.css";
```