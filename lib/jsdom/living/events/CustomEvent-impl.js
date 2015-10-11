"use strict";

const EventImpl = require("./Event-impl").implementation;
const CustomEventInit = require("../generated/CustomEventInit");

class CustomEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || CustomEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }

  initCustomEvent(type, bubbles, cancelable, detail) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.detail = detail;
  }
}

module.exports = {
  implementation: CustomEventImpl
};
