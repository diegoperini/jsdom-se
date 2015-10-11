"use strict";

const EventImpl = require("./Event-impl").implementation;
const MessageEventInit = require("../generated/MessageEventInit");

class MessageEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || MessageEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }

  initMessageEvent(type, bubbles, cancelable, data, origin, lastEventId, source, ports) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.data = data;
    this.origin = origin;
    this.lastEventId = lastEventId;
    this.source = source;
    this.ports = ports;
  }
}

module.exports = {
  implementation: MessageEventImpl
};
