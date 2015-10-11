"use strict";

const EventImpl = require("./Event-impl").implementation;
const UIEventInit = require("../generated/UIEventInit");

class UIEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || UIEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }

  initUIEvent(type, bubbles, cancelable, view, detail) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.view = view;
    this.detail = detail;
  }
}

module.exports = {
  implementation: UIEventImpl
};
