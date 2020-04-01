# React Portfolio Page

Portfolio page built with react, CSS grid, and sass.

## Reference

- [How to create a Website with CSS Grid & Sass](https://youtu.be/dRuMoGNcJfw) by Keven Powell
- [Relationship of grid layout to other layout methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)

## Grid vs Flexbox

|                 | Grid                    | Flexbox                          |
| --------------- | ----------------------- | -------------------------------- |
| need to control | row and col             | row or col                       |
| works           | from the layout in      | from the content out             |
| when            | layout -> place items   | "flex" items evenly in a "box"   |
| content size    | can change entire track | stretches or wrap to fit the box |

- If you are setting a percentage width on a flex item or disabling its flexibility, a grid is likely to be a better choice.
- e.g.
  ```scss
  .portfolio-item {
    flex: 1 1 50%; // basis: 50% of container => 2 cols
    &.featured {
      order: 0; // come first
      flex-basis: 100%; // take whole row
    }
  ...
  ```

## Implicit Grid Tracks

[MDN: grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)

> If a grid item is positioned into a row that is not explicitly sized by grid-template-rows, implicit grid tracks are created to hold it. This can happen either by explicitly positioning into a row that is out of range, or by the auto-placement algorithm creating additional rows.

- You can explicitly set only grid-template-columns in the container and set grid-row in each grid-item as you go.

## Memo

- Nesting (with/without Sass) adds to the specificity of the rule and make it difficult to
  overwrite it later.
- If you have added class to the element that you're styling, avoid nesting it inside other elements unless you have specific reasons to do so.

## Styling with event in React

- If you are storing style object with `useRef`, you are probably doing it in old 'jQuery' way.
- If you need to add listener for `keydown` event to `window`, you do it inside the `useEffect`.
  - Make sure that you return a cleanup function with `removeEventListener`.
- For almost all other cases, you don't need `addEventListener`. Instead, add event handler prop (e.g. `onClick`, `onAnimationEnd`) to the component and assign a handler function.
- That handler function usually sets local UI state (e.g. `isModalOpen`, `idLoading`)
- Then you can add class or inline style object that changes based on the local UI state to the component that you want to apply dynamic styling to.
  - You can implement the above with `styled-component` more cleanly. (But may be massier inside dev tools)

## Remove bouncing edges on top of the page

[MDN: overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)

```css
html,
body {
  overscroll-behavior: none;
}
```

- But Maybe keep it because most websites do have bouncing effect.
- Use it when you need it.
