
describe('aria', function () {
  var aria = require('aria-attributes');
  var assert = require('assert');
  var fixture = document.getElementById('fixture');

  describe('describedBy', function () {
    before(function () {
      fixture.removeAttribute('aria-describedby');
    });

    it('should set aria-describedby', function () {
      aria.describedBy(fixture, 'hello');
      assert(fixture.getAttribute('aria-describedby') === 'hello');
    });

    it('should not clobber existing aria-describedby values', function () {
      aria.describedBy(fixture, 'world');
      assert(fixture.getAttribute('aria-describedby') === 'hello world');
    });

    it('should not re-add an existing id', function () {
      aria.describedBy(fixture, 'hello');
      assert(fixture.getAttribute('aria-describedby') === 'hello world');
      aria.describedBy(fixture, 'world');
      assert(fixture.getAttribute('aria-describedby') === 'hello world');
    });

    it('should return the aria-describedby value', function () {
      assert(aria.describedBy(fixture) === 'hello world');
    });

    it('should operate with DOM nodes', function () {
      var div = document.createElement('div');
      aria.describedBy(fixture, div);
      assert(div.id);
      assert(typeof div.id === 'string');
      assert(fixture.getAttribute('aria-describedby') === 'hello world ' + div.id);
    });
  });

  describe('controls', function () {
    before(function () {
      fixture.removeAttribute('aria-controls');
    });

    it('should set aria-controls', function () {
      aria.controls(fixture, 'hello');
      assert(fixture.getAttribute('aria-controls') === 'hello');
    });

    it('should not clobber existing aria-controls values', function () {
      aria.controls(fixture, 'world');
      assert(fixture.getAttribute('aria-controls') === 'hello world');
    });

    it('should not re-add an existing id', function () {
      aria.controls(fixture, 'hello');
      assert(fixture.getAttribute('aria-controls') === 'hello world');
      aria.controls(fixture, 'world');
      assert(fixture.getAttribute('aria-controls') === 'hello world');
    });

    it('should return the aria-controls value', function () {
      assert(aria.controls(fixture) === 'hello world');
    });

    it('should operate with DOM nodes', function () {
      var div = document.createElement('div');
      aria.controls(fixture, div);
      assert(div.id);
      assert(typeof div.id === 'string');
      assert(fixture.getAttribute('aria-controls') === 'hello world ' + div.id);
    });
  });

  describe('flowTo', function () {
    before(function () {
      fixture.removeAttribute('aria-flowto');
    });

    it('should set aria-flowto', function () {
      aria.flowTo(fixture, 'hello');
      assert(fixture.getAttribute('aria-flowto') === 'hello');
    });

    it('should not clobber existing aria-flowto values', function () {
      aria.flowTo(fixture, 'world');
      assert(fixture.getAttribute('aria-flowto') === 'hello world');
    });

    it('should not re-add an existing id', function () {
      aria.flowTo(fixture, 'hello');
      assert(fixture.getAttribute('aria-flowto') === 'hello world');
      aria.flowTo(fixture, 'world');
      assert(fixture.getAttribute('aria-flowto') === 'hello world');
    });

    it('should return the aria-flowto value', function () {
      assert(aria.flowTo(fixture) === 'hello world');
    });

    it('should operate with DOM nodes', function () {
      var div = document.createElement('div');
      aria.flowTo(fixture, div);
      assert(div.id);
      assert(typeof div.id === 'string');
      assert(fixture.getAttribute('aria-flowto') === 'hello world ' + div.id);
    });
  });

  describe('labelledBy', function () {
    before(function () {
      fixture.removeAttribute('aria-labelledby');
    });

    it('should set aria-labelledby', function () {
      aria.labelledBy(fixture, 'hello');
      assert(fixture.getAttribute('aria-labelledby') === 'hello');
    });

    it('should not clobber existing aria-labelledby values', function () {
      aria.labelledBy(fixture, 'world');
      assert(fixture.getAttribute('aria-labelledby') === 'hello world');
    });

    it('should not re-add an existing id', function () {
      aria.labelledBy(fixture, 'hello');
      assert(fixture.getAttribute('aria-labelledby') === 'hello world');
      aria.labelledBy(fixture, 'world');
      assert(fixture.getAttribute('aria-labelledby') === 'hello world');
    });

    it('should return the aria-labelledby value', function () {
      assert(aria.labelledBy(fixture) === 'hello world');
    });

    it('should operate with DOM nodes', function () {
      var div = document.createElement('div');
      aria.labelledBy(fixture, div);
      assert(div.id);
      assert(typeof div.id === 'string');
      assert(fixture.getAttribute('aria-labelledby') === 'hello world ' + div.id);
    });
  });

  describe('owns', function () {
    before(function () {
      fixture.removeAttribute('aria-owns');
    });

    it('should set aria-owns', function () {
      aria.owns(fixture, 'hello');
      assert(fixture.getAttribute('aria-owns') === 'hello');
    });

    it('should not clobber existing aria-owns values', function () {
      aria.owns(fixture, 'world');
      assert(fixture.getAttribute('aria-owns') === 'hello world');
    });

    it('should not re-add an existing id', function () {
      aria.owns(fixture, 'hello');
      assert(fixture.getAttribute('aria-owns') === 'hello world');
      aria.owns(fixture, 'world');
      assert(fixture.getAttribute('aria-owns') === 'hello world');
    });

    it('should return the aria-owns value', function () {
      assert(aria.owns(fixture) === 'hello world');
    });

    it('should operate with DOM nodes', function () {
      var div = document.createElement('div');
      aria.owns(fixture, div);
      assert(div.id);
      assert(typeof div.id === 'string');
      assert(fixture.getAttribute('aria-owns') === 'hello world ' + div.id);
    });
  });

  describe('atomic', function () {
    before(function () {
      fixture.removeAttribute('aria-atomic');
    });

    it('should set aria-atomic', function () {
      aria.atomic(fixture, true);
      assert(fixture.getAttribute('aria-atomic'), 'true');
      aria.atomic(fixture, false);
      assert(fixture.getAttribute('aria-atomic'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.atomic(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.atomic(fixture, true);
      assert(aria.atomic(fixture) === true);
      aria.atomic(fixture, false);
      assert(aria.atomic(fixture) === false);
    });
  });

  describe('busy', function () {
    before(function () {
      fixture.removeAttribute('aria-busy');
    });

    it('should set aria-busy', function () {
      aria.busy(fixture, true);
      assert(fixture.getAttribute('aria-busy'), 'true');
      aria.busy(fixture, false);
      assert(fixture.getAttribute('aria-busy'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.busy(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.busy(fixture, true);
      assert(aria.busy(fixture) === true);
      aria.busy(fixture, false);
      assert(aria.busy(fixture) === false);
    });
  });

  describe('checked', function () {
    before(function () {
      fixture.removeAttribute('aria-checked');
    });

    it('should set aria-checked', function () {
      aria.checked(fixture, true);
      assert(fixture.getAttribute('aria-checked'), 'true');
      aria.checked(fixture, false);
      assert(fixture.getAttribute('aria-checked'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.checked(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.checked(fixture, true);
      assert(aria.checked(fixture) === true);
      aria.checked(fixture, false);
      assert(aria.checked(fixture) === false);
    });
  });

  describe('disabled', function () {
    before(function () {
      fixture.removeAttribute('aria-disabled');
    });

    it('should set aria-disabled', function () {
      aria.disabled(fixture, true);
      assert(fixture.getAttribute('aria-disabled'), 'true');
      aria.disabled(fixture, false);
      assert(fixture.getAttribute('aria-disabled'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.disabled(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.disabled(fixture, true);
      assert(aria.disabled(fixture) === true);
      aria.disabled(fixture, false);
      assert(aria.disabled(fixture) === false);
    });
  });

  describe('expanded', function () {
    before(function () {
      fixture.removeAttribute('aria-expanded');
    });

    it('should set aria-expanded', function () {
      aria.expanded(fixture, true);
      assert(fixture.getAttribute('aria-expanded'), 'true');
      aria.expanded(fixture, false);
      assert(fixture.getAttribute('aria-expanded'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.expanded(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.expanded(fixture, true);
      assert(aria.expanded(fixture) === true);
      aria.expanded(fixture, false);
      assert(aria.expanded(fixture) === false);
    });
  });

  describe('grabbed', function () {
    before(function () {
      fixture.removeAttribute('aria-grabbed');
    });

    it('should set aria-grabbed', function () {
      aria.grabbed(fixture, true);
      assert(fixture.getAttribute('aria-grabbed'), 'true');
      aria.grabbed(fixture, false);
      assert(fixture.getAttribute('aria-grabbed'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.grabbed(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.grabbed(fixture, true);
      assert(aria.grabbed(fixture) === true);
      aria.grabbed(fixture, false);
      assert(aria.grabbed(fixture) === false);
    });
  });

  describe('hasPopUp', function () {
    before(function () {
      fixture.removeAttribute('aria-haspopup');
    });

    it('should set aria-haspopup', function () {
      aria.hasPopUp(fixture, true);
      assert(fixture.getAttribute('aria-haspopup'), 'true');
      aria.hasPopUp(fixture, false);
      assert(fixture.getAttribute('aria-haspopup'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.hasPopUp(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.hasPopUp(fixture, true);
      assert(aria.hasPopUp(fixture) === true);
      aria.hasPopUp(fixture, false);
      assert(aria.hasPopUp(fixture) === false);
    });
  });

  describe('hidden', function () {
    before(function () {
      fixture.removeAttribute('aria-hidden');
    });

    it('should set aria-hidden', function () {
      aria.hidden(fixture, true);
      assert(fixture.getAttribute('aria-hidden'), 'true');
      aria.hidden(fixture, false);
      assert(fixture.getAttribute('aria-hidden'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.hidden(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.hidden(fixture, true);
      assert(aria.hidden(fixture) === true);
      aria.hidden(fixture, false);
      assert(aria.hidden(fixture) === false);
    });
  });

  describe('multiline', function () {
    before(function () {
      fixture.removeAttribute('aria-multiline');
    });

    it('should set aria-multiline', function () {
      aria.multiline(fixture, true);
      assert(fixture.getAttribute('aria-multiline'), 'true');
      aria.multiline(fixture, false);
      assert(fixture.getAttribute('aria-multiline'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.multiline(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.multiline(fixture, true);
      assert(aria.multiline(fixture) === true);
      aria.multiline(fixture, false);
      assert(aria.multiline(fixture) === false);
    });
  });

  describe('multiSelectable', function () {
    before(function () {
      fixture.removeAttribute('aria-multiselectable');
    });

    it('should set aria-multiselectable', function () {
      aria.multiSelectable(fixture, true);
      assert(fixture.getAttribute('aria-multiselectable'), 'true');
      aria.multiSelectable(fixture, false);
      assert(fixture.getAttribute('aria-multiselectable'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.multiSelectable(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.multiSelectable(fixture, true);
      assert(aria.multiSelectable(fixture) === true);
      aria.multiSelectable(fixture, false);
      assert(aria.multiSelectable(fixture) === false);
    });
  });

  describe('pressed', function () {
    before(function () {
      fixture.removeAttribute('aria-pressed');
    });

    it('should set aria-pressed', function () {
      aria.pressed(fixture, true);
      assert(fixture.getAttribute('aria-pressed'), 'true');
      aria.pressed(fixture, false);
      assert(fixture.getAttribute('aria-pressed'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.pressed(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.pressed(fixture, true);
      assert(aria.pressed(fixture) === true);
      aria.pressed(fixture, false);
      assert(aria.pressed(fixture) === false);
    });
  });

  describe('readOnly', function () {
    before(function () {
      fixture.removeAttribute('aria-readonly');
    });

    it('should set aria-readonly', function () {
      aria.readOnly(fixture, true);
      assert(fixture.getAttribute('aria-readonly'), 'true');
      aria.readOnly(fixture, false);
      assert(fixture.getAttribute('aria-readonly'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.readOnly(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.readOnly(fixture, true);
      assert(aria.readOnly(fixture) === true);
      aria.readOnly(fixture, false);
      assert(aria.readOnly(fixture) === false);
    });
  });

  describe('required', function () {
    before(function () {
      fixture.removeAttribute('aria-required');
    });

    it('should set aria-required', function () {
      aria.required(fixture, true);
      assert(fixture.getAttribute('aria-required'), 'true');
      aria.required(fixture, false);
      assert(fixture.getAttribute('aria-required'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.required(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.required(fixture, true);
      assert(aria.required(fixture) === true);
      aria.required(fixture, false);
      assert(aria.required(fixture) === false);
    });
  });

  describe('selected', function () {
    before(function () {
      fixture.removeAttribute('aria-selected');
    });

    it('should set aria-selected', function () {
      aria.selected(fixture, true);
      assert(fixture.getAttribute('aria-selected'), 'true');
      aria.selected(fixture, false);
      assert(fixture.getAttribute('aria-selected'), 'false');
    });

    it('should throw when not given a boolean value', function (done) {
      try {
        aria.selected(fixture, 'not a boolean');
      } catch (err) {
        return done();
      }
      throw new Error('didn\'t throw');
    });

    it('should return a proper boolean', function () {
      aria.selected(fixture, true);
      assert(aria.selected(fixture) === true);
      aria.selected(fixture, false);
      assert(aria.selected(fixture) === false);
    });
  });

  describe('activeDescendant', function () {
    before(function () {
      fixture.removeAttribute('aria-activedescendant');
    });

    it('should set aria-activedescendant', function () {
      aria.activeDescendant(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-activedescendant'), 'abcdefg');
    });

    it('should get the value of aria-activedescendant', function () {
      assert(aria.activeDescendant(fixture) === 'abcdefg');
    });
  });

  describe('dropEffect', function () {
    before(function () {
      fixture.removeAttribute('aria-dropeffect');
    });

    it('should set aria-dropeffect', function () {
      aria.dropEffect(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-dropeffect'), 'abcdefg');
    });

    it('should get the value of aria-dropeffect', function () {
      assert(aria.dropEffect(fixture) === 'abcdefg');
    });
  });

  describe('label', function () {
    before(function () {
      fixture.removeAttribute('aria-label');
    });

    it('should set aria-label', function () {
      aria.label(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-label'), 'abcdefg');
    });

    it('should get the value of aria-label', function () {
      assert(aria.label(fixture) === 'abcdefg');
    });
  });

  describe('live', function () {
    before(function () {
      fixture.removeAttribute('aria-live');
    });

    it('should set aria-live', function () {
      aria.live(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-live'), 'abcdefg');
    });

    it('should get the value of aria-live', function () {
      assert(aria.live(fixture) === 'abcdefg');
    });
  });

  describe('relevant', function () {
    before(function () {
      fixture.removeAttribute('aria-relevant');
    });

    it('should set aria-relevant', function () {
      aria.relevant(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-relevant'), 'abcdefg');
    });

    it('should get the value of aria-relevant', function () {
      assert(aria.relevant(fixture) === 'abcdefg');
    });
  });

  describe('sort', function () {
    before(function () {
      fixture.removeAttribute('aria-sort');
    });

    it('should set aria-sort', function () {
      aria.sort(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-sort'), 'abcdefg');
    });

    it('should get the value of aria-sort', function () {
      assert(aria.sort(fixture) === 'abcdefg');
    });
  });

  describe('valueText', function () {
    before(function () {
      fixture.removeAttribute('aria-valuetext');
    });

    it('should set aria-valuetext', function () {
      aria.valueText(fixture, 'abcdefg');
      assert(fixture.getAttribute('aria-valuetext'), 'abcdefg');
    });

    it('should get the value of aria-valuetext', function () {
      assert(aria.valueText(fixture) === 'abcdefg');
    });
  });

  describe('level', function () {
    before(function () {
      fixture.removeAttribute('aria-level');
    });

    it('should set the value of aria-level', function () {
      aria.level(fixture, 300);
      assert(fixture.getAttribute('aria-level') === '300');
    });

    it('should get the value of aria-level', function () {
      assert(aria.level(fixture) === 300);
    });
  });

  describe('posInSet', function () {
    before(function () {
      fixture.removeAttribute('aria-posinset');
    });

    it('should set the value of aria-posinset', function () {
      aria.posInSet(fixture, 300);
      assert(fixture.getAttribute('aria-posinset') === '300');
    });

    it('should get the value of aria-posinset', function () {
      assert(aria.posInSet(fixture) === 300);
    });
  });

  describe('setSize', function () {
    before(function () {
      fixture.removeAttribute('aria-setsize');
    });

    it('should set the value of aria-setsize', function () {
      aria.setSize(fixture, 300);
      assert(fixture.getAttribute('aria-setsize') === '300');
    });

    it('should get the value of aria-setsize', function () {
      assert(aria.setSize(fixture) === 300);
    });
  });

  describe('valueMax', function () {
    before(function () {
      fixture.removeAttribute('aria-valuemax');
    });

    it('should set the value of aria-valuemax', function () {
      aria.valueMax(fixture, 300);
      assert(fixture.getAttribute('aria-valuemax') === '300');
    });

    it('should get the value of aria-valuemax', function () {
      assert(aria.valueMax(fixture) === 300);
    });
  });

  describe('valueMin', function () {
    before(function () {
      fixture.removeAttribute('aria-valuemin');
    });

    it('should set the value of aria-valuemin', function () {
      aria.valueMin(fixture, 300);
      assert(fixture.getAttribute('aria-valuemin') === '300');
    });

    it('should get the value of aria-valuemin', function () {
      assert(aria.valueMin(fixture) === 300);
    });
  });

  describe('valueNow', function () {
    before(function () {
      fixture.removeAttribute('aria-valuenow');
    });

    it('should set the value of aria-valuenow', function () {
      aria.valueNow(fixture, 300);
      assert(fixture.getAttribute('aria-valuenow') === '300');
    });

    it('should get the value of aria-valuenow', function () {
      assert(aria.valueNow(fixture) === 300);
    });
  });
});
