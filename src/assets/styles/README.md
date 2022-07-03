## SASS

### _base.sass

Сontains styles for the main page elements. All styles should be applied automatically when the application is first rendered.


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

```sass
.block
  @include display-justify-between
```

### _breakpoints.sass

Contains variables that are needed when using media

```sass
.block
  @media screen and (max-width: $lg-min-width)
```
