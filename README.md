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
