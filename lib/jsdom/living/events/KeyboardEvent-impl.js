"use strict";

const UIEventImpl = require("./UIEvent-impl").implementation;
const KeyboardEventInit = require("../generated/KeyboardEventInit");

class KeyboardEventImpl extends UIEventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || KeyboardEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }

  initKeyboardEvent(type, bubbles, cancelable, view, key, location, modifiersList, repeat, locale) {
    if (this._dispatchFlag) {
      return;
    }

    this.initUIEvent(type, bubbles, cancelable, view, key);
    this.location = location;
    this.modifiersList = modifiersList;
    this.repeat = repeat;
    this.locale = locale;
  }
}

module.exports = {
  implementation: KeyboardEventImpl
};
