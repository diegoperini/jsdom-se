"use strict";

const EventImpl = require("./Event-impl").implementation;
const HashChangeEventInit = require("../generated/HashChangeEventInit");

class HashChangeEventImpl extends EventImpl {
  constructor(args, privateData) {
    const type = args[0]; // TODO: Replace with destructuring
    const eventInitDict = args[1] || HashChangeEventInit.convert(undefined);

    super([type, eventInitDict], privateData);
  }
}

module.exports = {
  implementation: HashChangeEventImpl
};
