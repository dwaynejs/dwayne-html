# dwayne-html

### Why?

The plugin is needed for inserting generated html into elements. You
may also transform it (sanitize for example) before inserting it.

Be aware that generated html may contain dangerous scripts!

```bash
$ npm install --save dwayne-html
```

### Usage

```js
import { Block } from 'dwayne';
import sanitizeHtml from 'sanitize-html';
import html from 'dwayne-html';

Block.mixin('html', html());
Block.mixin('sanitized-html', html((html) => {
  return sanitizeHtml(html, options);
}));
```

```html
<div html="{html}"/>
<div sanitized-html="{html}"/>
```

### API

##### html(transformFn = identity)

The function returns mixin wrapper (you must wrap some mixin class -
usually Dwayne `Mixin` class in order to use it). The only argument
is used for transforming html before inserting it.
