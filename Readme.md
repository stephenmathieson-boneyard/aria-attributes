
# aria-attributes

  Getter/setters for ARIA attributes

## Installation

  Install with [component(1)](http://component.io):

    $ component install stephenmathieson/aria-attributes

## API

### Methods for space-delimited list of ID references

  - `aria.controls(element, id)`
  - `aria.describedBy(element, id)`
  - `aria.flowTo(element, id)`
  - `aria.labelledBy(element, id)`
  - `aria.owns(element, id)`

  When `id` is provided, will update element's corresponding `aria-` attribute to include `id`.  Will not clobber an existing value or re-add the same `id`.

  When `id` is omitted, will return the current value of the corresponding `aria-` attribute.

### Methods for boolean attributes

  - `aria.atomic(element, value)`
  - `aria.busy(element, value)`
  - `aria.checked(element, value)`
  - `aria.disabled(element, value)`
  - `aria.expanded(element, value)`
  - `aria.grabbed(element, value)`
  - `aria.hasPopUp(element, value)`
  - `aria.hidden(element, value)`
  - `aria.multiline(element, value)`
  - `aria.multiSelectable(element, value)`
  - `aria.pressed(element, value)`
  - `aria.readOnly(element, value)`
  - `aria.required(element, value)`
  - `aria.selected(element, value)`

  Getter/setter for the element's corresponding `aria-` attribute.  Will return a proper `Boolean`.

### Methods for generic string attributes

  - `aria.activeDescendant(element, str)`
  - `aria.dropEffect(element, str)`
  - `aria.label(element, str)`
  - `aria.live(element, str)`
  - `aria.relevant(element, str)`
  - `aria.sort(element, str)`
  - `aria.valueText(element, str)`

  Getter/setter for the element's corresponding `aria-` attribute.

### Methods for number attributes

  Getter/setter for the element's corresponding `aria-` attribute.  Will return a `Number`.

## Example Usage

```js
var aria = require('aria-attributes');
var input = document.querySelector('input[name="username"]');

aria.describedBy(input, 'foo');
aria.describedBy(input, 'bar');
```

## License

  MIT
