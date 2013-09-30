
var trim = require('trim'),
    bind = require('bind');


// space-delimited methods
map([
  'controls',
  'describedBy',
  'flowTo',
  'labelledBy',
  'owns'
], function (attr, element, id) {
  var val = element.getAttribute(attr);

  if (!id) {
    return val;
  }

  var ids = split(val, ' ');
  if (ids.indexOf(id) == -1) {
    ids.push(id);
  }

  var n = trim(ids.join(' '));
  element.setAttribute(attr, n);
  return n;
});

// boolean methods
map([
  'atomic',
  'busy',
  'checked',
  'disabled',
  'expanded',
  'grabbed',
  'hasPopUp',
  'hidden',
  'multiline',
  'multiSelectable',
  'pressed',
  'readOnly',
  'required',
  'selected'
], function (attr, element, val) {
  var current = element.getAttribute(attr);

  if (val === undefined) {
    return current === 'true' ? true : false;
  }

  if (typeof val !== 'boolean' && val !== 'true' && val !== 'false') {
    throw new TypeError(attr + ' must be a boolean');
  }

  element.setAttribute(attr, val);
  return val;
});


// string methods
map([
  'activeDescendant',
  'dropEffect', // TODO may only be: "none", "popup", "execute", "copy", "move", "reference"
  'label',
  'live', // TODO may only be: "off", "live" or "assertive"
  'relevant', // TODO may only be: "all" or any combo of "additions", "removals", or "text"
  'sort', // TODO may only be: "ascending", "descending", "none" or "other"
  'valueText'
], function (attr, element, val) {
  var current = trim(element.getAttribute(attr) || '');
  if (val === undefined) {
    return current;
  }

  val = trim(val);
  element.setAttribute(attr, val);
  return val;
});


// number methods
map([
  'level',
  'posInSet',
  'setSize',
  'valueMax',
  'valueMin',
  'valueNow'
], function (attr, element, val) {
  var current = element.getAttribute(attr);

  if (val === undefined) {
    return current
      ? parseInt(current, 10)
      : null;
  }

  val = parseInt(val, 10);
  element.setAttribute(attr, val);
  return val;
});


/**
 * Split the given `str` via `delimiter`, ignoring empty items
 *
 * @api private
 * @param {String} str
 * @param {String|RegExp} delimiter
 * @return {Array}
 */
function split(str, delimiter) {
  var a = (str || '').split(delimiter);
  var b = [];

  for (var i = 0, len = a.length; i < len; i++) {
    var c = trim(a[i]);
    if (c) b.push(c);
  }

  return b;
}


/**
 * Map the given `arr` of methods to `fn`
 *
 * @api private
 * @param {Array} arr
 * @param {Function} fn
 */
function map(arr, fn) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var method = arr[i];
    exports[method] = bind(null, fn, 'aria-' + method.toLowerCase());
  }
}
