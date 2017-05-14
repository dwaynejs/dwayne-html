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
import sanitizeHtml from 'sanitize-html';
import Html from 'dwayne-html';

Html.transform = sanitizeHtml;
```

```html
<script>
  import Html from 'dwayne-html';
</script>

<div Html="{html}"/>
```

### API

Set `Html.transform` to the function that transforms the html.
