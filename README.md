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

## Memo

- Nesting (with/without Sass) adds to the specificity of the rule and make it difficult to
  overwrite it later.
- If you have added class to the element that you're styling, avoid nesting it inside other elements unless you have specific reasons to do so.
