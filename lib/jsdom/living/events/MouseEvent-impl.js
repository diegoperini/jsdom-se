"use strict";

const UIEventImpl = require("./UIEvent-impl").implementation;
const MouseEventInit = require("../generated/MouseEventInit");

class MouseEventImpl extends UIEventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || MouseEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }

  initMouseEvent(type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY,
                 ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
    if (this._dispatchFlag) {
      return;
    }

    this.initUIEvent(type, bubbles, cancelable, view, detail);
    this.screenX = screenX;
    this.screenY = screenY;
    this.clientX = clientX;
    this.clientY = clientY;
    this.ctrlKey = ctrlKey;
    this.altKey = altKey;
    this.shiftKey = shiftKey;
    this.metaKey = metaKey;
    this.button = button;
    this.relatedTarget = relatedTarget;
  }
}

module.exports = {
  implementation: MouseEventImpl
};
