## SASS

### _base.sass

Сontains styles for the main page elements. All styles should be applied automatically when the application is first rendered.

### _functions.sass

Here you should make various kinds of calculations, different operations that are repeated in different files.

### _helpers.sass

Contains styles that are used for global page blocks.

```html
<div className="h-container">
  <div className="class-name">
    <h1>Prello</h1>
  </div>
</div
```

### _mixins.sass

This should include frequently repeated styles.

### _variables.sass

Contains a list of the main project variables. you can use them in the code in the following ways:

- standart 
```css 
color: $yourVariable
```

- function
```css
color: clr(yourVariable, opacity)
```
